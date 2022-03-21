import * as React from 'react';
import { Box, Grid, styled} from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Tag from './OldTag';

const TagList = (props) => {
  const menus = [1];
  const [category, setCategory] = useState({});

  const categoryList = menus.map(
    (menu, index) =>
      Object.keys(category) !== undefined && (
        <Tag
          key={index}
          tags={
            Object.keys(category) !== undefined &&
            Object.entries(category)[0] !== undefined &&
            Object.entries(category)[0][1][menu]
          }
        />
      ),
  );

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/campaigns?category=${props.category}`,
      )
      .then((result) => {
        console.log('연결');
        setCategory(result.data);
        console.log(result.data)
      })
      .catch(() => {
        console.log('연결실패');
      });
    return () => {};
  }, []);

  return (
    <Grid>
      {Object.keys(category) !== undefined &&
        Object.entries(category)[0] !== undefined && (
          <>
            {categoryList}
          </>    
        )
      }
    </Grid>
  );
};

export default TagList;

const TagBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    listStyle: 'none',
    boxShadow: '0',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '970px',
    maxWidth: '100%',
    padding: '0 10px 0 10px',
}));
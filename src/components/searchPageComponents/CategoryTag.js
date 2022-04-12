import * as React from 'react';
import { Box, Chip, styled } from '@mui/material';

import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { SearchPageStore } from '../../store/SearchPageStore';

const Tag = () => {
  const [tag, setTag] = useState('');
  const categories = Object.values(tag);
  const list = categories[0];
  const { setCategoryIndex, setTagName } = SearchPageStore();
  const { tagType, setTagType } = SearchPageStore();

  const categoryList =
    list &&
    list.map((tag, index) => (
      <Link to={`tags/${tag}`} style={{ textDecoration: 'none' }}>
          <TagChip
            key={index}
            label={<InnerBox>#{tag}</InnerBox>}
            variant="outlined"
            color="primary"
            clickable
            onClick={() => {
              setCategoryIndex(index + 1);
              setTagName(list[index]);
              setTagType('카테고리태그');
            }}
          />
      </Link>
    ));

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/categories`)
      .then((result) => {
        console.log('연결');
        setTag(result.data);
      })
      .catch(() => {
        console.log('연결실패');
      });
    return () => {};
  }, []);

  return (
    <TagBox>
      {categoryList}
    </TagBox>
  )
}

export default Tag;
export const num = createContext(0);

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
  padding: '0 15px 0 15px',
}));

const TagChip = styled(Chip)(() => ({
 padding: '5px',
 height: '40px',
 fontSize: { xs: 1, md: 1 },
 borderColor: 'primary',
 borderRadius: 25,
 margin: '5px 5px 5px 0',
}));

const InnerBox = styled(Box)(() => ({
 fontSize: { xs: 13, md: 16 },
}))
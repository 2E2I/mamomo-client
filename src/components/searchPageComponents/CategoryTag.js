import * as React from 'react';
import { Box, Grid, styled } from '@mui/material';
import { ListStore } from '../../store/MainPageStore';
import { useEffect } from 'react';
import TagList from './TagList';

const CategoryTagList = () => {
  const { categories, setCategory } = ListStore();
  const menus = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const categoryList = categories.map((tags) => <TagList key={tags} category={tags} />)

  useEffect(() => {
    setCategory(menus);
    return ()=>{};
  }, [])

  return (
    <Grid container justifyContent="center">
      <TagBox>
        {categoryList}
      </TagBox>
    </Grid>
  );
};

export default CategoryTagList;

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
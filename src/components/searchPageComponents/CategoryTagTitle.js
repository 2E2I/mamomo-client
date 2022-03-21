import React from 'react';
import { Box, styled } from '@mui/material';
import { useState } from 'react';

const CategoryTagTitle = (props) => {
  const [title, setTitle] = useState('카테고리 태그');
  return (
    <TitleBox>
      <InnerFontBox>
        {title}
      </InnerFontBox>
    </TitleBox>
  )
}

export default CategoryTagTitle;

const TitleBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  listStyle: 'none',
  boxShadow: '0',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '970px',
  maxWidth: '100%'
}));

const InnerFontBox = styled(Box)(() => ({
  fontSize: '20px',
  fontWeight: 'bold',
  padding: '50px 15px 15px 15px'
}));
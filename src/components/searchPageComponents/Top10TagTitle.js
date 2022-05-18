import React from 'react';
import { Box, styled } from '@mui/material';
import { useState } from 'react';

const Top10TagTitle = (props) => {
  const [title, setTitle] = useState('인기 태그');
  return (
    <TitleBox>
      <InnerFontBox>
        {title}
      </InnerFontBox>
    </TitleBox>
  )
}

export default Top10TagTitle;

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
  fontFamily: 'Noto Sans KR',
  fontWeight: 'bold',
  padding: '50px 15px 15px 15px'
}));
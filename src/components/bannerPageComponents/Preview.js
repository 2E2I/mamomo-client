import React from 'react';
import BannerDesign from './BannerDesign';
import { Box, Grid, styled } from '@mui/material';

const Preview = () => {
  return (
    <div>
      <Grid container spacing={1} sx={{ mb: 1 }}>
        <Grid item xs={6}>
          <TitleBox>이미지 미리보기</TitleBox>
        </Grid>
        <Grid item xs={6}>
          <GridBox>
            <CopyButton sx={{ border: 1.5 }}>저장하기</CopyButton>
          </GridBox>
        </Grid>
      </Grid>
      <BannerDesign></BannerDesign>
    </div>
  );
};

export default Preview;

const GridBox = styled(Box)(() => ({
  direction: 'rtl',
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
}));

const TitleBox = styled(Box)(() => ({
  fontWeight: 700,
  fontSize: 24,
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  marginLeft: '20px',
  '&:hover': {
    cursor: 'pointer',
    color: '#616161',
  },
}));

const CopyButton = styled(Box)(() => ({
  fontWeight: 500,
  fontSize: 18,
  padding: 4,
  marginTop: 4,
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  borderRadius: 4,
  borderColor: '#616161',
  marginRight: 30,
  '&:hover': {
    cursor: 'pointer',
    color: '#616161',
  },
}));

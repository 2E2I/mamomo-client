import React from 'react';
import BannerDesign from './BannerDesign';
import { Box, Grid, styled } from '@mui/material';
import html2canvas from 'html2canvas';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { height } from '@mui/system';
import { BannerPageStore } from '../../store/BannerPageStore';

const Preview = () => {
  const [bannerW, setBannerW] = useState('1000');

  const { wid } = BannerPageStore();

  useEffect(() => {
    setBannerW(wid);

    return () => {};
  }, [wid]);

  const onCapture = () => {
    console.log('onCapute');
    html2canvas(document.getElementById('aa')).then((canvas) => {
      console.log('onCaputeMiddle');
      onSaveAs(canvas.toDataURL('image.jpg'), 'imgae-download.jpg');
      //document.body.appendChild(canvas)
      console.log('onCaputeEnd');
    });
  };

  const onSaveAs = (uri, filename) => {
    console.log('onSaveAs');
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.remove(link);
    window.location.replace('/banner');
  };

  return (
    <div>
      <Grid container spacing={1} sx={{ mb: 1 }}>
        <Grid item xs={6}>
          <TitleBox>이미지 미리보기</TitleBox>
        </Grid>
        <Grid item xs={6} sx={{ direction: 'rtl' }}>
            <CopyButton id="saveImg" sx={{ border: 2 }} onClick={onCapture}>
              저장하기
            </CopyButton>
        </Grid>
      </Grid>
      <div id="aa" style={{ width: `${bannerW}px` }}>
        <BannerDesign></BannerDesign>
      </div>
    </div>
  );
};

export default Preview;

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
  backgroundColor: '#9e9e9e',
  color: '#f5f5f5',
  fontWeight: 400,
  fontSize: 18,
  marginTop: 4,
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  borderRadius: 4,

  height: 30,
  width: 120,
  marginRight: 10,
  textAlign: 'center',
  '&:hover': {
    cursor: 'pointer',
    color: '#616161',
  },
}));

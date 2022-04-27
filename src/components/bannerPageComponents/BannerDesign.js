import React from 'react';
import { Box, styled } from '@mui/material';
import html2canvas from 'html2canvas';

import { BannerPageStore } from '../../store/BannerPageStore';
import { useEffect } from 'react';
import { useState } from 'react';


const BannerTest = () => {
  const {
    siteType,
    title,
    info,
    imgData,
    BgColor1,
    BgColor2,
    setSiteType,
    setTitle,
    setInfo,
    textColor1,
    textColor2,
    textColor3,
    textFont1,
    textFont2,
    textFont3,
    wid,
    hei
  } = BannerPageStore();
    
  var img = new Image();
  img.src = imgData;

  return (
    <BannerBox
      textAlign="center"
      color1={BgColor1}
      color2={BgColor2}
      wid={wid}
      hei={hei}
    >
      <InfoBox>
        <SiteType color={textColor1} fsize={textFont1}>
          {siteType}
        </SiteType>
        <Title color={textColor2} fsize={textFont2}>
          {title}
        </Title>
        <Info color={textColor3} fsize={textFont3}>
          {info}
        </Info>
        <Source>produced.by MAMOMO</Source>
      </InfoBox>
      <ImgBox img={img.src} />
    </BannerBox>
  );
};

export default BannerTest;



const BannerBox = styled(Box)(({ color1, color2, wid, hei }) => ({
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: `${ wid }px`,
  maxWidth: '1000px',
  display: 'flex',
  flexDirection: 'row',
  background: `linear-gradient(to right, ${color1}, ${color2})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  height: `${ hei }px`,
}));

const InfoBox = styled(Box)(() => ({
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  // alignContent: 'center',
  // alignItems: 'center',
  // backgroundColor: 'inherit',
  // backgroundSize: 'cover',
  // backgroundPosition: 'center',
  height: 'inherit',
  marginBottom: 10,
  paddingRight: 30,
  paddingLeft: 30,
  fontSize: '1px',
}));

const ImgBox = styled(Box)(({ img }) => ({
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '30%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignContent: 'center',
  backgroundColor: 'inherit',
  //backgroundImage: `url(${img})`,
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  alignItems: 'center',
  height: 'inherit',

}));

const SiteType = styled(Box)(({ color, fsize }) => ({
  fontWeight: 500,
  fontSize: `${fsize}em`,
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  textAlign: 'start',
  display: 'flex',
  overflow: 'hidden',
  color: { color },
  height: '12%',
  maxHeight: '20%',
  marginTop: '20px',
}));

const Title = styled(Box)(({ color, fsize }) => ({
  fontWeight: 600,
  fontSize: `${fsize}em`,
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  textAlign: 'start',
  display: 'flex',
  overflow: 'hidden',
  color: { color },
  maxHeight: '50%',
  marginBottom: '20px',
}));

const Info = styled(Box)(({ color, fsize }) => ({
  fontWeight: 300,
  fontSize: `${fsize}em`,
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  textAlign: 'start',
  overflow: 'hidden',
  color: { color },
  height: '35%',
  maxHeight: '60%',
  marginBottom: 10,
}));

const Source = styled(Box)(() => ({
  fontWeight: 200,
  fontSize: '14em',
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  textAlign: 'end',
  overflow: 'hidden',
  color: '#f48fb1',
  height: '30px',
}));

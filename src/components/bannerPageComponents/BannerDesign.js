import React from 'react';
import { Box, styled } from '@mui/material';
import spb from '../../assets/images/sak.jpg';

const BannerTest = () => {
  return (
    <BannerBox textAlign="center">
      <InfoBox>
        <SiteType>happybean</SiteType>
        <Title>익산시민 희망공약제안 캠페인을 응원해주세요.</Title>
        <Info>
          시민이 직접 공약을 제안합니다.우리 익산을 위해 필요하다고 생각하는
          아이디어가 있는 시민이면 누구나 참여 가능하며, 아이디어를 구체적인
          공약으로 만들어 직접 제안하는 것입니다.
        </Info>
        <Source>produced.by MAMOMO</Source>
      </InfoBox>
      <ImgBox />
    </BannerBox>
  );
};

export default BannerTest;

const BannerBox = styled(Box)(() => ({
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FFF8F8',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '200px',
  borderRadius: 10,
}));

const InfoBox = styled(Box)(() => ({
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '650px',
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  // alignContent: 'center',
  // alignItems: 'center',
  // backgroundColor: 'inherit',
  // backgroundSize: 'cover',
  // backgroundPosition: 'center',
  height: 200,
  marginBottom: 10,
  paddingRight: 30,
}));

const ImgBox = styled(Box)(() => ({
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '300px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignContent: 'center',
  backgroundColor: '#f9fbe7',
  backgroundImage: `url(https://happybean-phinf.pstatic.net/20220310_20/1646893410554UqCEe_PNG/%ED%81%AC%EA%B8%B0%EB%B3%80%ED%99%9855555.png?type=a360)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  alignItems: 'center',
  height: 200,
  borderRadius: 10,
}));

const SiteType = styled(Box)(() => ({
  fontWeight: 500,
  fontSize: 14,
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  textAlign: 'start',
  display: 'flex',
  //alignItems: 'center',
  overflow: 'hidden',
  color: '#9ccc65',
  height: '30px',
  marginTop: '20px',
}));

const Title = styled(Box)(() => ({
  fontWeight: 600,
  fontSize: 24,
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  //alignItems: 'center',
  textAlign: 'start',
  display: 'flex',
  overflow: 'hidden',
  color: '#424242',
  maxHeight: '35px',
  marginBottom: '10px',
}));

const Info = styled(Box)(() => ({
  fontWeight: 300,
  fontSize: 16,
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  //alignItems: 'center',
  textAlign: 'start',
  overflow: 'hidden',
  color: '#424242',
  height: '75px',
  marginBottom: 10
}));

const Source = styled(Box)(() => ({
  fontWeight: 200,
  fontSize: 14,
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  //alignItems: 'center',
  textAlign: 'end',
  overflow: 'hidden',
  color: '#f48fb1',
  height: '30px',
}));


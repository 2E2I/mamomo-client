import React from 'react';
import { Box, Container, styled, Grid } from '@mui/material';
import { Link, Route } from 'react-router-dom';
import kakaoicon from '../assets/images/icon-kakao.png';
import facebookicon from '../assets/images/icon-facebook.png';
import twittericon from '../assets/images/icon-twitter.png';
import { BannerPageStore } from '../store/BannerPageStore';
import axios from 'axios';
import boogie04 from '../assets/images/boogie01.png';
import { useHistory } from 'react-router-dom/';

import happybean from '../assets/images/hb2.PNG';
import kakao from '../assets/images/zzo.jpg';
import goat from '../assets/images/goat_logo.png';
import cherry from '../assets/images/cherry.PNG';

import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
const DonationModal = (
  img,
  title,
  body,
  url,
  siteType,
  id,
  statusPrice,
  targetPrice,
  organizationName,
  logoImg,
  logoSize,
) => {
  const history = useHistory();

  const {
    setSiteType,
    setTitle,
    setInfo,
    setUrl,
    info,
    setImgData,
    imgData,
    initImgData,
  } = BannerPageStore();

  const m2b = async () => {
    await axios
      .get(`http://localhost:8080/api/campaign/${id}`)
      .then((result) => {
        console.log('연결');
        setImgData(result.data.thumbnail);
      });
    let str = body.slice(0, 120);
    setSiteType(siteType);
    setTitle(title);
    setInfo(str + '...');
    setUrl(url);
    console.log('ImgData= ' + imgData);
    // window.location.href = '/banner';
    history.push('/banner');
  };

  return (
    <Box>
      <Box
        sx={{
          fontSize: 24,
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          height: 140,
          width: 600,
          padding: 5,
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFAFA',
        }}
      >
        {title}
      </Box>
      <Box
        sx={{
          fontSize: 17,
          fontWeight: 200,
          textOverflow: 'ellipsis',
          overflow: 'auto',
          height: 294,
          width: 600,
          padding: 5,
          paddingTop: 2,
        }}
      >
        {body}
      </Box>
      <hr />
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          alignItems="center"
          justifyContent="center"
          sx={{ textAlign: 'center', display: 'flex', mt: 2 }}
        >
          <Box
            sx={{
              display: 'inline',
              fontWeight: 700,
              fontFamily: 'Noto Sans KR',
              mx: 0,
              fontSize: 40,
              color: '#f48fb1',
            }}
          >
            {priceToString(statusPrice)}
          </Box>
          <Box
            sx={{
              display: 'inline',
              fontWeight: 500,
              fontFamily: 'Noto Sans KR',
              mx: 0,
              fontSize: 20,
              color: '#f48fb1',
              ml: 0.5,
              mt: 1.5,
            }}
          >
            원
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          alignItems="center"
          justifyContent="center"
          sx={{ textAlign: 'center', display: 'flex', mb: 4 }}
        >
          <Box
            sx={{
              display: 'inline',
              fontWeight: 400,
              fontFamily: 'Noto Sans KR',
              mx: 0,
              fontSize: 18,
              color: '#424242',
            }}
          >
            {priceToString(targetPrice)}원 목표
          </Box>
        </Grid>
        <Grid xs={1.5}></Grid>
        <Grid
          item
          xs={3}
          alignItems="center"
          justifyContent="center"
          sx={{ textAlign: 'center', display: 'flex' }}
        >
          <SiteTypeBox logoImg={logoImg} logoSize={logoSize}></SiteTypeBox>
        </Grid>
        <Grid
          item
          xs={3}
          alignItems="center"
          justifyContent="center"
          sx={{ textAlign: 'center', display: 'flex' }}
        >
          <Box
            sx={{
              fontSize: 24,
              fontWeight: 700,
              textOverflow: 'ellipsis',
              overflow: 'auto',
              height: 40,
              display: 'flex',
              color: '#f48fb1',
            }}
          >
            <Box sx={{ margin: 'auto', marginBottom: 0 }}>MAMOMO</Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          alignItems="center"
          justifyContent="center"
          sx={{ textAlign: 'center', display: 'flex' }}
        >
          <Box
            sx={{
              display: 'inline',
              fontWeight: 400,
              fontFamily: 'Noto Sans KR',
              mx: 0,
              fontSize: 12,
              color: '#424242',
            }}
          >
            {organizationName}
          </Box>
        </Grid>

        {/* </Link> */}
        {/* <Box
        sx={{
          fontSize: 17,
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          height: 120,
          maxWidth: 600,
          minWidth: 600,
          padding: 5,
          paddingTop: 1,
          paddingBottom: 1,
          mt: 1,
        }}
      >
        <Container disableGutters={true} sx={{ display: 'flex', marginTop: 2 }}>
          <Box
            sx={{
              marginRight: 2,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                backgroundImage: `url(${kakaoicon})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                margin: 'auto',
              }}
            />
            <Box>카카오톡</Box>
          </Box>
          <Box
            sx={{
              marginRight: 2,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                backgroundImage: `url(${twittericon})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                margin: 'auto',
              }}
            />
            <Box textAlign="center">트위터</Box>
          </Box>
          <Box
            sx={{
              marginRight: 2,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                backgroundImage: `url(${facebookicon})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                margin: 'auto',
              }}
            />
            <Box>페이스북</Box>
          </Box>
        </Container>
      </Box> */}
        <Grid item xs={12}>
          <BorderLinearProgress
            variant="determinate"
            value={(statusPrice / targetPrice) * 100}
            sx={{ mt: 2 }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          alignItems="center"
          justifyContent="center"
          sx={{ textAlign: 'center', display: 'flex' }}
        >
          <Box
            onClick={() => {
              window.open(`${url}`, '_blank');
            }}
            sx={{
              background: `linear-gradient(to right, #f8bbd0,#ff80ab)`,
              color: '#f5f5f5',
              fontWeight: 400,
              fontSize: 18,
              fontFamily: 'Noto Sans KR',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              borderRadius: 2,
              height: 30,
              width: '100%',
              textAlign: 'center',
              '&:hover': {
                cursor: 'pointer',
                color: '#ec407a',
              },
            }}
          >
            바로가기
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          alignItems="center"
          justifyContent="center"
          sx={{ textAlign: 'center', display: 'flex' }}
        >
          <Box
            onClick={() => {
              m2b();
            }}
            sx={{
              background: `linear-gradient(to right, #f8bbd0,#ff80ab)`,
              color: '#f5f5f5',
              fontWeight: 400,
              fontSize: 18,
              fontFamily: 'Noto Sans KR',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              borderRadius: 2,
              height: 30,
              width: '100%',
              textAlign: 'center',
              '&:hover': {
                cursor: 'pointer',
                color: '#ec407a',
              },
            }}
          >
            배너만들기
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DonationModal;

const priceToString = (price) =>
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#f48fb1' : '#308fe8',
  },
}));

const SiteTypeBox = styled(Box)(({ logoImg, logoSize }) => ({
  width: 100,
  height: 20,
  backgroundImage: `url(${logoImg})`,
  backgroundSize: logoSize,
  backgroundRepeat: 'no-repeat',
  fontWeight: 400,
  fontFamily: 'Noto Sans KR',
  fontSize: 10,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  color: '#fafafa',
  backgroundColor: '#fff',
  borderRadius: 2,
  backgroundPosition: 'center',
}));


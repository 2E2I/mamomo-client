import React from 'react';
import { Box, Container, styled } from '@mui/material';
import { Link, Route } from 'react-router-dom';
import kakaoicon from '../assets/images/icon-kakao.png';
import facebookicon from '../assets/images/icon-facebook.png';
import twittericon from '../assets/images/icon-twitter.png';
import { BannerPageStore } from '../store/BannerPageStore';
import axios from 'axios';
import boogie04 from '../assets/images/boogie01.png';


const DonationModal = (img, title, body, url, siteType, id) => {
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
    await axios.get(`http://localhost:8080/api/campaign/${id}`).then((result)=>{
      console.log('연결');
      console.log(result.data.thumbnail);
      setImgData(result.data.thumbnail);
    });
    let str = body.slice(0, 120);
    setSiteType(siteType);
    setTitle(title);
    setInfo(str + '...');
    setUrl(url);
    console.log('ImgData= ' + imgData);
    window.location.href = '/banner';
  };

  return (
    <Box>
      <Box
        sx={{
          position: 'absolute',
          top: '395px',
          left: '340px',
          backgroundImage: `url(${boogie04})`,
          backgroundPosition: 'center',
          //backgroundRepeat: 'no-repeat',
          width: 230,
          height: 230,
          backgroundSize: '120%',
          //opacity: 0.6,
        }}
      ></Box>
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
          height: 240,
          width: 600,
          padding: 5,
          paddingTop: 2,
        }}
      >
        {body}
      </Box>
      <hr />
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
          width: 120,
          ml: 5,
          mt: 4,
          textAlign: 'center',
          '&:hover': {
            cursor: 'pointer',
            color: '#ec407a',
          },
        }}
      >
        바로가기
      </Box>
      {/* <Link to="/banner"> */}
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
          width: 120,
          ml: 5,
          mt: 3,
          textAlign: 'center',
          '&:hover': {
            cursor: 'pointer',
            color: '#ec407a',
          },
        }}
      >
        배너만들기
      </Box>
      {/* </Link> */}
      <Box
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
      </Box>
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
    </Box>
  );
};

export default DonationModal;

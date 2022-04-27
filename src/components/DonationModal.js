import React from 'react';
import { Box, Container, styled } from '@mui/material';
import { Link, Route } from 'react-router-dom';
import kakaoicon from '../assets/images/icon-kakao.png';
import facebookicon from '../assets/images/icon-facebook.png';
import twittericon from '../assets/images/icon-twitter.png';
import { BannerPageStore } from '../store/BannerPageStore';

const DonationModal = (img, title, body, url, siteType) => {
  const { setSiteType, setTitle, setInfo, setUrl, info } = BannerPageStore();
  return (
    <>
      <Box
        sx={{
          fontSize: 24,
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          maxHeight: 140,
          minHeight: 140,
          maxWidth: 600,
          minWidth: 600,
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
          textOverflow: 'ellipsis',
          overflow: 'auto',
          maxHeight: 180,
          minHeight: 180,
          maxWidth: 600,
          minWidth: 600,
          padding: 5,
          paddingTop: 2,
        }}
      >
        {body}
      </Box>
      <hr />
      <Box
        sx={{
          fontSize: 17,
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          height: 80,
          maxWidth: 600,
          minWidth: 600,
          padding: 5,
          paddingTop: 0,
          paddingBottom: 1,
        }}
      >
        바로가기 <div>{url}</div>
      </Box>
      {/* <Link to="/banner"> */}
      <Box
        onClick={() => {
          let str = body.slice(0, 120);
          setSiteType(siteType);
          setTitle(title);
          setInfo(str + '...');
          setUrl(url);
          window.location.href = '/banner';
        }}
        sx={{
          backgroundColor: '#9e9e9e',
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
          textAlign: 'center',
          '&:hover': {
            cursor: 'pointer',
            color: '#616161',
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
        }}
      >
        공유하기
        <br />
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
          height: 60,
          padding: 5,
          paddingTop: 2,
          paddingBottom: 1,
          display: 'flex',
          color: '#f48fb1',
        }}
      >
        <Box sx={{ margin: 'auto', marginBottom: 0 }}>MAMOMO</Box>
      </Box>
    </>
  );
};

export default DonationModal;

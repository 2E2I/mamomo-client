import React from 'react';
import { Box, Container, styled } from '@mui/material';
import kakaoicon from '../assets/images/icon-kakao.png';
import facebookicon from '../assets/images/icon-facebook.png';
import twittericon from '../assets/images/icon-twitter.png';
const DonationModal = (img, title, body, url) => {
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
        <Box
          sx={{
            fontSize: 17,
            textOverflow: 'ellipsis',
            overflow: 'auto',
            height: 80,
            maxWidth: 600,
            minWidth: 600,
            padding: 5,
            paddingTop: 2,
            paddingBottom: 1,
          }}
        >
          배너만들기
        </Box>
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
          <Container
            disableGutters={true}
            sx={{ display: 'flex', marginTop: 2 }}
          >
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
          <Box sx={{ margin: 'auto', marginBottom: 0 }}>마마모</Box>
        </Box>
      </>
    );
};

export default DonationModal;

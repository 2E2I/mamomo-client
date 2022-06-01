import React, { useEffect } from 'react';

import { Container, Grid, Box } from '@mui/material';

import TopAppBar from '../../components/TopAppBar';
import UserTab from '../../components/myPageComponents/UserTab';
import Title from '../../components/myPageComponents/Title';

import { MyPageStore } from '../../store/MyPageStore';
import MyBannerList from '../../components/myPageComponents/myBannerPageComponents/MyBannerList';

// 내가 만든 배너 페이지
const MyBannerPage = () => {

  const { setTitle, setIndex } = MyPageStore();

  useEffect(() => {
    setTitle('내가 만든 배너');
    setIndex(2);
  }, [setTitle, setIndex])

  return (
    <Container
      maxWidth={false}
      sx={{
        width: '1000px',
      }}
      disableGutters={true}
      justify="center"
    >
      <TopAppBar />
      <br />
      <br />

      <Grid container justifycontent="center">
        <UserTab />
        <Box
          sx={{
            width: '800px',
            // border: 1,
          }}
        >
          <Title />
          <Box
            sx={{
              m: '0 0 0 40px',
              // border: 1,
            }}
          >
            <MyBannerList />
          </Box>
        </Box>
      </Grid>
    </Container>
  );
}

export default MyBannerPage;
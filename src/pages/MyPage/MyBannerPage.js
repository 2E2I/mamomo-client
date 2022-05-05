import React, { useEffect } from 'react';

import { Container, Grid } from '@mui/material';

import TopAppBar from '../../components/TopAppBar';
import UserTab from '../../components/myPageComponents/UserTab';
import Title from '../../components/myPageComponents/Title';

import { MyPageStore } from '../../store/MyPageStore';

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
      width:"1000px",
    }} 
    disableGutters={true}
    justify="center"
    >

    <TopAppBar />

    <Grid container justifycontent='center'>
      <UserTab />
      <Title />
    </Grid>

    </Container>
  )
}

export default MyBannerPage;
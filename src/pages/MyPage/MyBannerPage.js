import React from 'react';

import { Container, Grid } from '@mui/material';

import TopAppBar from '../../components/TopAppBar';
import UserTab from '../../components/myPageComponents/UserTab';
import Title from '../../components/myPageComponents/Title';

// 내가 만든 배너 페이지
const MyBannerPage = () => {
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
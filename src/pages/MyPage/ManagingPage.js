import React, { useEffect } from 'react';

import { Container, Grid } from '@mui/material';

import TopAppBar from '../../components/TopAppBar';
import UserTab from '../../components/myPageComponents/UserTab';
import Title from '../../components/myPageComponents/Title';

import { MyPageStore } from '../../store/MyPageStore';

// 프로필 관리 페이지
const ManagingPage = () => {

  const { setTitle } = MyPageStore();

  useEffect(() => {
    setTitle('프로필 관리');
  }, [])

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

export default ManagingPage;
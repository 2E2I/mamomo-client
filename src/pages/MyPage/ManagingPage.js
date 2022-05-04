import React, { useEffect } from 'react';

import { Container, Grid, Box } from '@mui/material';

import TopAppBar from '../../components/TopAppBar';
import UserTab from '../../components/myPageComponents/UserTab';
import Title from '../../components/myPageComponents/Title';

import Nickname from '../../components/myPageComponents/managingPageComponents/Nickname';
import Birth from '../../components/myPageComponents/managingPageComponents/Birth';
import Sex from '../../components/myPageComponents/managingPageComponents/Sex';
import FavTopics from '../../components/myPageComponents/managingPageComponents/FavTopics';
import SaveButton from '../../components/myPageComponents/managingPageComponents/SaveButton';
import CancelButton from '../../components/myPageComponents/managingPageComponents/CancelButton';

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
      <Box span>
        <Title />
        <Nickname />
        <Birth />
        <Sex />
        <FavTopics />

        
        <SaveButton />
        <CancelButton />

      </Box>

    </Grid>

    </Container>
  )
}

export default ManagingPage;
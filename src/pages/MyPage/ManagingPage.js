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
import ProfileImg from '../../components/myPageComponents/managingPageComponents/ProfileImg';

// 프로필 관리 페이지
const ManagingPage = () => {

  const { setTitle, setIndex } = MyPageStore();

  useEffect(() => {
    setTitle('프로필 관리');
    setIndex(0);
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
        <Box span>
          <Title />

          <ProfileImg />
          <Nickname />
          <Birth />
          <Sex />
          <FavTopics />

          <SaveButton />
          <CancelButton />
        </Box>
      </Grid>
    </Container>
  );
}

export default ManagingPage;
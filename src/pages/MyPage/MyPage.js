import React from 'react';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

import TopAppBar from '../../components/TopAppBar';
import UserTab from '../../components/myPageComponents/UserTab';

const MyPage = () => {

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

      <UserTab />

    </Container>
  )
}

export default MyPage;
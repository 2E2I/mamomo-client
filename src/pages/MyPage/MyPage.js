import React from 'react';
import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import TopAppBar from '../../components/TopAppBar';
import UserTab from '../../components/myPageComponents/UserTab';
import Title from '../../components/myPageComponents/Title';

const MyPage = () => {

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
        <Title />
      </Grid>
    </Container>
  );
}

export default MyPage;
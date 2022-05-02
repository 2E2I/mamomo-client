import React from 'react';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

import TopAppBar from '../../components/TopAppBar';

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

      마이페이지입니다.

    </Container>
  )
}

export default MyPage;
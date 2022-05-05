import React from 'react';

import { Container, Grid, Box } from '@mui/material';

import TopAppBar from '../../components/TopAppBar';
import UserTab from '../../components/myPageComponents/UserTab';
import Title from '../../components/myPageComponents/Title';
import LikePageDonationList from '../../components/myPageComponents/likePageComponents/LikePageDonationList';
import Paging from '../../components/Paging';

// 좋아요한 기부 페이지
const LikePage = () => {
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
      <Box
        sx={{
          width: "800px",
          // border: 1,
        }}
      >
        <Title />
        <Box
          sx={{
            m: "60px 0 0 40px",
            //border: 1,
          }}
        >
          <LikePageDonationList />
        </Box>
        <Paging />
      </Box>
    </Grid>
    </Container>
  )
}

export default LikePage;
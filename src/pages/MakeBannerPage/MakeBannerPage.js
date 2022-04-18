import React from 'react';
import { Box, Container } from '@mui/material';
import TopAppBar from '../../components/TopAppBar';
import BannerTest from '../../components/bannerPageComponents/BannerDesign'

const MakeBannerPage = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        //minWidth: { xs: '100%', md: '1200px' },
        //maxWidth: { xs: '100%', md: '2560px' },
        width: '1000px',
      }}
      disableGutters={true}
      justify="center"
    >
      <TopAppBar />

      <hr />
      <BannerTest />
    </Container>
  );
};

export default MakeBannerPage;
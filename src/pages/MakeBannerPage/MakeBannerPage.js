import React from 'react';
import { Box, Container } from '@mui/material';
import TopAppBar from '../../components/TopAppBar';
import BannerTest from '../../components/bannerPageComponents/BannerDesign'
import Preview from '../../components/bannerPageComponents/Preview';
import SourceCode from '../../components/bannerPageComponents/SourceCode';
import BannerPageTest from '../../components/bannerPageComponents/BannerPageTest';
import EditForm from '../../components/bannerPageComponents/EditForm';

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
      <BannerPageTest />
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
        <br />

        <Preview />
        <br />
        <EditForm />
        <br />
        <br />
        <SourceCode />
      </Container>
    </Container>
  );
};

export default MakeBannerPage;
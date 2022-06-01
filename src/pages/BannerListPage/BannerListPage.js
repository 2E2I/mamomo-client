import React from 'react';
import { Box, Container } from '@mui/material';
import TopAppBar from '../../components/TopAppBar';
import BannerListPageBanner from '../../components/BannerListPage/BannerListPageBanner';
import MasonryImageList from '../../components/BannerListPage/MasonryImageList';

const BannerListPage = () => {
    return (
      <>
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
          <br />
          <br />
          <br />
          <BannerListPageBanner />
          <br />
          <br />
          <MasonryImageList />
        </Container>
      </>
    );
};

export default BannerListPage;

import React from 'react';
import { Box, Container } from '@mui/material';
import TopAppBar from '../../components/TopAppBar';
import Categories from '../../components/Categories';
import DonationListByCategorie from '../../components/DonationListByCategorie';


const MainPage2 = () => {
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
      <br />

      <Categories />
      <br />
      <br />

      <DonationListByCategorie />
      <hr />
    </Container>
  );
};

export default MainPage2;

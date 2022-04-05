import React from 'react';
import { Box, Container } from '@mui/material';
import TopAppBar from '../../components/TopAppBar';
import Categories from '../../components/Categories';
import DonationListByCategorie from '../../components/DonationListByCategorie';
import SortBox from '../../components/SortBox';
import CategoryPageTest from '../../components/CategoryPageTest';
import Paging from '../../components/Paging';

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
      <CategoryPageTest />
      <br />
      <Categories />
      <br />
      <br />
      <SortBox />

      <DonationListByCategorie />
      <Paging />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default MainPage2;

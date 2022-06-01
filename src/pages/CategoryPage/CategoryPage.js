import React from 'react';
import { Box, Container } from '@mui/material';
import TopAppBar from '../../components/TopAppBar';
import Categories from '../../components/Categories';
import DonationListByCategory from '../../components/DonationListByCategory';
import SortBox from '../../components/SortBox';
import CategoryPageTest from '../../components/CategoryPageTest';
import Paging from '../../components/Paging';

const CategoryPage = () => {
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
      <br />
      <br />
      <CategoryPageTest />
      <br />
      <Categories />
      <br />
      <br />
      <SortBox />

      <DonationListByCategory />
      <Paging />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default CategoryPage;

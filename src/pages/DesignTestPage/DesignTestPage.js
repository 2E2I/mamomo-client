import React from 'react';
import { Box, Container } from '@mui/material';
import TopAppBar from '../../components/TopAppBar';
import RoundSearchBar from '../../components/RoundSearchBar';
import AngledSearchBar from '../../components/AngledSearchBar';
import CardList from '../../components/MainPageDonationList';
import Card from '../../components/DonationCard';
import MainCarousel from '../../components/Carousel';
import MainCategories from '../../components/MainCategories';

const DesignTestPage = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        //minWidth: { xs: '100%', md: '1200px' },
        //maxWidth: { xs: '100%', md: '2560px' },
        maxWidth: '100%',
        minWidth: '1200px',
      }}
      disableGutters={true}
      container
      justifyContent="center"
    >
      <hr />
      TopAppBar
      <TopAppBar />
      <hr />
      MainCarousel
      <MainCarousel />
      <hr />
      RoundSearchBar
      <RoundSearchBar />
      <hr />
      AngledSearchBar
      <AngledSearchBar />
      <hr />
      MainCategories
      <MainCategories />
      <hr />
      CardList
      <CardList />
      <hr />
      Card
      <Card />
      <hr />
    </Container>
  );
};

export default DesignTestPage;

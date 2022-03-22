import React from 'react';
import { Box, Container } from '@mui/material';
import TopAppBar from '../../components/TopAppBar';
import RoundSearchBar from '../../components/RoundSearchBar';
import AngledSearchBar from '../../components/AngledSearchBar';
import CardList from '../../components/mainPageComponents/OldMainPageDonationList';
import CardList2 from '../../components/mainPageComponents/MainPageDonationList';
import Card from '../../components/OldDonationCard';
import MainCarousel from '../../components/mainPageComponents/Carousel';
import Tags from '../../components/Tags';
import Categories from '../../components/Categories';


const DesignTestPage = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: '1000px',
      }}
      disableGutters={true} //패딩 삭제
      justify="center"
    >
      <hr />
      <Categories />
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
      <Categories />
      <hr />
      CardList
      <CardList />
      <hr />
      CardList2
      <CardList2 />
      <hr />
      Card
      <Card />
      <hr />
    </Container>
  );
};

export default DesignTestPage;

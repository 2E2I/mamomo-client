import React from 'react';
import { Box, Container } from '@mui/material';
import TopAppBar from '../../components/TopAppBar';
import RoundSearchBar from '../../components/mainPageComponents/MainPageSearchBar';
import CardList2 from '../../components/mainPageComponents/MainPageDonationList';
import Card from '../../components/OldDonationCard';
import MainCarousel from '../../components/mainPageComponents/Carousel2';
import Categories from '../../components/Tags';

const MainPage = () => {
    return (
      <Container
        maxWidth={false}
        sx={{
          //minWidth: { xs: '100%', md: '1200px' },
          //maxWidth: { xs: '100%', md: '2560px' },
          width:"1000px"
        }}
        disableGutters={true}
        justify="center"
      >
        <TopAppBar />
        <MainCarousel />
        <br/>

        <RoundSearchBar />
        <br />
        <Categories />
        
        <CardList2 />
        <hr />
      </Container>
    );
};

export default MainPage;
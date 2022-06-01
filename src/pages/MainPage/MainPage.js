import React, { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import TopAppBar from '../../components/TopAppBar';
import RoundSearchBar from '../../components/mainPageComponents/MainPageSearchBar';
import CardList2 from '../../components/mainPageComponents/MainPageDonationList';
import MainCarousel from '../../components/mainPageComponents/Carousel2';
import Categories from '../../components/Tags';
import MainTestComponent from '../../components/mainPageComponents/MainTestComponent';

const MainPage = () => {

    return (
      <>
        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1050px',
          }}
          disableGutters={true}
          justify="center"
        >
          <TopAppBar />
        </Container>
        <br />
        <br />
        <br />
        <Container
          maxWidth={false}
          sx={
            {
              //width: '1000px',
              //minWidth: '1920px',
            }
          }
          disableGutters={true}
          justify="center"
        >
          <MainTestComponent />
        </Container>

      </>
    );
};

export default MainPage;
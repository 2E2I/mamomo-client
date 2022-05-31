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
          sx={
            {
              maxWidth: '500px',
            }
          }
          disableGutters={true}
          justify="center"
        >
          <TopAppBar />
        </Container>
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
        <Container
          maxWidth={false}
          sx={{
            width: '1000px',
          }}
          disableGutters={true}
          justify="center"
        >
          <MainCarousel />

          <br />
          <CardList2 />
          <hr />
        </Container>
      </>
    );
};

export default MainPage;
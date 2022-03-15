import React from 'react';
import { Box, Grid, styled, Container } from '@mui/material';
import Card from './DonationCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const CardList = (props) => {
  const menus = [1, 2, 3, 4];
  const [category, setCategory] = useState('');
  const [campaign, setCampaign] = useState({});

  const menuList = menus.map(
    (menu, index) =>
      Object.keys(campaign) !== undefined && (
        <Card
          key={index}
          campaign={
            Object.keys(campaign) !== undefined &&
            Object.entries(campaign)[0] !== undefined &&
            Object.entries(campaign)[0][1][menu]
          }
        />
      ),
  );

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/campaigns?category=${props.category}`)
      .then((result) => {
        console.log('연결');
        setCampaign(result.data);
      })
      .catch(() => {
        console.log('연결실패');
      });
    return () => {};
  }, []);

  // console.log(
  //   'test',
  //   Object.keys(campaign) !== undefined &&
  //     Object.entries(campaign)[0] !== undefined &&
  //     Object.entries(campaign)[0][1][0],
  // );


  return (
    <Container>
      {Object.keys(campaign) !== undefined &&
        Object.entries(campaign)[0] !== undefined && (
          <>
            <Container sx={{ mt: 2 }}>
              <ListTitle>
                {campaign.campaigns[props.category].category}
                <ArrowForwardIosIc />
              </ListTitle>
            </Container>
            <ListBox container justifyContent="center">
              {menuList}
            </ListBox>
          </>
        )}
    </Container>
  );
};

export default CardList;

const ListBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  //반응형 작업
  // [theme.breakpoints.down('md')]: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  // },
  // [theme.breakpoints.up('md')]: {
  //   display: 'flex',
  // },
  // [theme.breakpoints.down('lg')]: {
  //   //flexWrap: "wrap",
  // },
}));

const ListTitle = styled(Box)(() => ({
  display: 'flex',
  maxWidth: '1200px',
  fontWeight: 'bold',
  fontSize: 20,
  flexWrap: 'nowrap',
  paddingLeft: '40px',
  minWidth: '1200px',

  //반응형
  //   sx:{
  //   flexWrap: { xs: 'wrap', md: 'nowrap' },
  //   minWidth: { xs: '100%', md: '1200px' },
  //   pl: { xs: 4, md: 11 },
  //   }
}));

const ArrowForwardIosIc = styled(ArrowForwardIosIcon)(() => ({
  marginTop: 5.5,
  marginLeft: 1,
  fontSize: 18,
}));

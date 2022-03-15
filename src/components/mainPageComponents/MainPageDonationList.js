import React from 'react';
import { Box, Grid, styled } from '@mui/material';
import Card from '../DonationCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CardList = () => {
  const menus = ['Menu1', 'Menu2', 'Menu3', 'Menu4'];
  const menuList = menus.map((menu) => <Card />);

  return (
    <Grid container justifyContent="center">
      <Grid md={12} container justifyContent="center" sx={{ mt: 2 }}>
        <ListTitle>
          어린이
          <ArrowForwardIosIc />
        </ListTitle>
      </Grid>
      <ListBox>{menuList}</ListBox>
    </Grid>
  );
};

export default CardList;

const ListBox = styled(Box)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
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
  paddingLeft: '90px',
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

import React from 'react';
import { Box, Grid, styled, Container } from '@mui/material';
import Card2 from './DonationCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { HeartCheckStore } from '../store/HeartCheckStore';

const CardList = ({category}) => {

  const menus = [1, 2, 3, 4];
  const [campaign, setCampaign] = useState({});

  const menuList = category.content.map(
    (menu, index) =>
      category.content !== undefined && (
        <Card2 key={index} campaign={menu !== undefined && menu} />
      ),
  );


  console.log(category.content[1].category);

  return (
    <>
      {category.content !== undefined && (
        <>
          <Box sx={{ mt: 2 }}>
            <ListTitle>
              {category.content[0].category}
              <ArrowForwardIosIc />
            </ListTitle>
          </Box>
          <ListBox container justifyContent="center">
            {menuList}
          </ListBox>
        </>
      )}
    </>
  );
};

export default CardList;

const ListBox = styled(Box)(() => ({
  display: 'flex',
}));

const ListTitle = styled(Box)(() => ({
  display: 'flex',
  fontWeight: '500',
  fontFamily: 'Noto Sans KR',
  fontSize: 20,
  flexWrap: 'nowrap',
  marginLeft: '10px',
}));

const ArrowForwardIosIc = styled(ArrowForwardIosIcon)(() => ({
  marginTop: 5.5,
  marginLeft: 1,
  fontSize: 20,
}));

import React from 'react';
import { Box, Grid, styled, Container } from '@mui/material';
import Card2 from './DonationCard';
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
        <Card2
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
      .get(
        `http://localhost:8080/api/campaigns?category=${props.category}&sort=due_date,asc`,
      )
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
    <>
      {Object.keys(campaign) !== undefined &&
        Object.entries(campaign)[0] !== undefined && (
          <>
            <Box sx={{ mt: 1 }}>
              <ListTitle>
                {campaign.campaigns[props.category].category}
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

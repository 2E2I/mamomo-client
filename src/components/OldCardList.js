import React from 'react';
import { Box, Grid, styled, Container } from '@mui/material';
import Card from './OldDonationCard';
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
}));

const ListTitle = styled(Box)(() => ({
  display: 'flex',
  maxWidth: '1200px',
  fontWeight: 'bold',
  fontFamily: 'SCDream4',
  fontSize: 20,
  flexWrap: 'nowrap',
  paddingLeft: '40px',
  minWidth: '1200px',
}));

const ArrowForwardIosIc = styled(ArrowForwardIosIcon)(() => ({
  marginTop: 5.5,
  marginLeft: 1,
  fontSize: 18,
}));

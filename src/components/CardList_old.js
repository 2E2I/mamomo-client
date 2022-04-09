import React from 'react';
import { Box, Grid, styled, Container } from '@mui/material';
import Card2 from './DonationCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const CardList = (props) => {
  useEffect(() => {
    const t = async () => {
      await getDate();
      await console.log('u2 =' + props.category);
    };
    t();
    return () => {};
  }, []);

  const menus = [1, 2, 3, 4];
  const [campaign, setCampaign] = useState({});

  const menuList = menus.map(
    (menu, index) =>
      campaign !== undefined && (
        <Card2
          key={index}
          campaign={
            campaign !== undefined &&
            campaign[menu]
          }
        />
      ),
  );

  const getDate = async () => {
    console.log('kjfksjgk')
    const b = `http://localhost:8080/api/campaigns?page=${0}&size=5&category=${
      props.category
    }&sort=due_date,ASC`;
    console.log(b);
    await axios
      .get(b)
      .then((result) => {
        console.log('연결');
        console.log(props.category);
        let k = Object.values(result.data)[0].content;
        setCampaign(k);

        console.log(b);
        console.log(Object.values(result.data)[0].content);
      })
      .catch(() => {
        console.log('연결실패');
      });
    return () => {};
  };

  console.log(props.a);
  console.log(campaign);

  return (
    <>
      {Object.values(campaign)[0] !== undefined && (
        <>
          <Box sx={{ mt: 1 }}>
            <ListTitle>
              {campaign[0].category}

              {props.category}
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

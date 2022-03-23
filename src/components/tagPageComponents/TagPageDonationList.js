import React, { useState } from 'react';
import { Box, Grid, styled, Container } from '@mui/material';
import Card from '../DonationCard';
import { useEffect } from 'react';
import axios from 'axios';

const TagPageDonationList = (props) => {
  const menus = [1, 2, 3, 4];
  const [campaign, setCampaign] = useState('');

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
        `http://localhost:8080/api/campaigns?category=1`,
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

  return (
    <>
      {Object.keys(campaign) !== undefined &&
        Object.entries(campaign)[0] !== undefined && (
          <>
            <Box sx={{ mt: 1 }}>
              {/* <ListTitle>
                {props.campaign.campaigns[props.category].category}
              </ListTitle> */}
            </Box>
            <ListBox container justifyContent="center">
              {menuList}
            </ListBox>
          </>
        )}
    </>
  );
};

export default TagPageDonationList;

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
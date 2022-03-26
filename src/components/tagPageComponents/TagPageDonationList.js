import React, { useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';

import Card from '../DonationCard';
import axios from 'axios';
import { SearchPageStore } from '../../store/SearchPageStore';

const TagPageDonationList = () => {
  const menus = [1, 2, 3, 4];
  const [campaign, setCampaign] = useState('');
  const { categoryIndex, setCategoryIndex } = SearchPageStore();

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
        `http://localhost:8080/api/campaigns?category=${categoryIndex}`,
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
            <Box sx={{ mt: 1 }} />
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
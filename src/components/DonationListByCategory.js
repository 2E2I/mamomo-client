import React, { useState, useEffect, useCallback } from 'react';
import { Box, Grid, styled, Container } from '@mui/material';
import Card2 from './DonationCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';
import { authHeader } from './authenticationFunc';

import { CategoryStore } from '../store/CategoryPageStore';

const DonationListByCategory = () => {
  const [campaign, setCampaign] = useState({});

  const [result, setResult] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { category, setCategory } = CategoryStore(); //zustand
  const { categoryList, setCategoryList, setTotlaPage, setPageSize, sortValue } =
    CategoryStore(); //zustand
  const { storePage, setStorePage } = CategoryStore(); //zustand

  const fetchMoreData = async () => {
    setLoading(true);
    setResult(result.concat(items.slice(0, 20)));
    setItems(items.slice(20));
    setLoading(false);
  };

  const menuList = result.map(
    (menu, index) =>
      Object.keys(result) !== undefined && (
        <Box sx={{ mb: 6 }}>
          <Card2 key={index} campaign={menu} />
        </Box>
      ),
  );

  useEffect(() => {
    let a = `http://localhost:8080/api/campaigns?page=${storePage}&size=20&category=${category}&${sortValue}`;
    console.log(sortValue);
    category == 0 &&
      (a = `http://localhost:8080/api/campaigns?page=${storePage}&${sortValue}`);
    axios
      .get(a, {
          headers: authHeader(),
        },)
      .then((result) => {
        console.log('연결');
        console.log('storePage'+ storePage);
        console.log(
          'totalElements' + Object.entries(result.data)[0][1].totalElements,
        );
        console.log(
          'pageSize' + Object.entries(result.data)[0][1].pageable.pageSize,
        );
        setCampaign(result.data);
        setTotlaPage(Object.entries(result.data)[0][1].totalElements);
        setPageSize(Object.entries(result.data)[0][1].pageable.pageSize);

        let response = Object.entries(result.data)[0][1].content;
        setResult(response);
      })
      .catch(() => {
        console.log('연결실패');
      });

    return () => {};
  }, [category, storePage, sortValue]);

  return (
    <>
      {Object.keys(campaign) !== undefined &&
        Object.entries(campaign)[0] !== undefined && (
          <>
            <Box sx={{ mt: 1 }}>
              <ListTitle>
                {/* {campaign.campaigns[1].category}
                {categoryList[category]}
                <ArrowForwardIosIc /> */}
              </ListTitle>
            </Box>
            <ListBox container justifyContent="center">
              {menuList}
            </ListBox>
          </>
        )}
    </>
  );
};;;

export default DonationListByCategory;

const ListBox = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
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

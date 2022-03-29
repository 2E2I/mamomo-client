import React, { useState, useEffect, useCallback } from 'react';
import { Box, Grid, styled, Container } from '@mui/material';
import Card2 from './DonationCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';

import { useInView } from 'react-intersection-observer';
import { CategoryStore } from '../store/CategoryPageStore';

const DonationListByCategorie = () => {
  const [campaign, setCampaign] = useState({});

  const [result, setResult] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [ref, inView] = useInView();

  const { category, setCategory } = CategoryStore(); //zustand
  const { categoryList, setCategoryList } = CategoryStore(); //zustand

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
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      fetchMoreData();
    }
  }, [inView, loading]);

  useEffect(() => {
    let a = `http://localhost:8080/api/campaigns?category=${category}&sort=due_date,asc`;
    category == 0 &&
      (a = `http://localhost:8080/api/campaigns?sort=due_date,asc`);
    axios
      .get(a)
      .then((result) => {
        console.log('연결');
        console.log(Object.entries(result.data)[0][1]);
        setCampaign(result.data);

        let response = Object.entries(result.data)[0][1];
        setResult(response.slice(0, 20));
        response = response.slice(20);
        setItems(response);
        setLoading(false);
      })
      .catch(() => {
        console.log('연결실패');
      });

    return () => {};
  }, [category]);

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
            <div ref={ref}>로딩중... {inView.toString()}</div>
          </>
        )}
    </>
  );
};;

export default DonationListByCategorie;

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

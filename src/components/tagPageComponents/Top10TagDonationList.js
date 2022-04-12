import React, { useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';

import Card from '../DonationCard';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';

import { SearchPageStore } from '../../store/SearchPageStore';
import { CategoryStore } from '../../store/CategoryPageStore';

const Top10TagDonationList = () => {
  const [campaign, setCampaign] = useState({});

  const [result, setResult] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [ref, inView] = useInView();

  const { categoryIndex, tagName } = SearchPageStore(); //zustand
  const { setTotlaPage, setPageSize, sortValue, storePage } = CategoryStore(); //zustand

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
          <Card key={index} campaign={menu} />
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
    let a = `http://localhost:8080/api/tag/${tagName}?page=${storePage}&size=20&${sortValue}`;
    axios
      .get(a)
      .then((result) => {
        console.log('연결');
        console.log(Object.entries(result.data)[0][1]);
        setCampaign(result.data);
        setTotlaPage(Object.entries(result.data)[0][1].totalElements);
        setPageSize(Object.entries(result.data)[0][1].pageable.pageSize);


        let response = Object.entries(result.data)[0][1].content;
        setResult(response);
        //setResult(response.slice(0, 20));
        //response = response.slice(20);
        //setItems(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        console.log('연결실패');
      });

    return () => {};
  }, [categoryIndex, storePage, sortValue]);

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
};

export default Top10TagDonationList;

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


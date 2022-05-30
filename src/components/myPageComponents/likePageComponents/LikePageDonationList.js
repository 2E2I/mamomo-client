import React, { useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';

import axios from 'axios';
import { useInView } from 'react-intersection-observer';

import Card from '../../DonationCard';
import { authHeader } from '../../authenticationFunc';

const LikePageDonationList = () => {
  const [campaign, setCampaign] = useState({});

  const [result, setResult] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [ref, inView] = useInView();

  const fetchMoreData = async () => {
    setLoading(true);
    setResult(result.concat(items.slice(0, 20)));
    setItems(items.slice(20));
    // setLoading(false);
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
    axios
      .get(
        "http://localhost:8080/api/campaigns/heartList", {
          headers: authHeader()
        }
      )
      .then((result) => {
        console.log('연결');
        console.log(Object.entries(result.data)[0][1]);
        setCampaign(result.data);

        let response = Object.entries(result.data)[0][1].content;
        setResult(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        console.log('연결실패');
      });

    return () => {};
  }, []);

  return (
    <>
      {Object.keys(campaign) !== undefined &&
        Object.entries(campaign)[0] !== undefined && (
          <>
            <ListBox>
              {menuList}
            </ListBox>
          </>
        )}
    </>
  );
};

export default LikePageDonationList;

const ListBox = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
}));

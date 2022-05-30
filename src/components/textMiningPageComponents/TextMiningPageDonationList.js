import React, { useState, useEffect } from 'react';
import {
  Box,
  styled
} from '@mui/material';

import Card from '../DonationCard';
import axios from 'axios';

import { useInView } from 'react-intersection-observer';
import { CategoryStore } from '../../store/CategoryPageStore';
import { authHeader } from '../authenticationFunc';
import { TextMiningPageStore } from '../../store/TextMiningPageStore';

const TextMiningPageDonationList = () => {
  const [campaign, setCampaign] = useState({});

  const [result, setResult] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [ref, inView] = useInView();

  const { setTotlaPage, setPageSize, storePage } =
    CategoryStore(); //zustand

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

  const { text } = TextMiningPageStore();

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      fetchMoreData();
    }
  }, [inView, loading]);

  useEffect(() => {
    let url = `http://localhost:8080/api/textMining?page=${storePage}&size=20`;
    axios
      .post(url,
        {
          text: text
        },
        {
          headers: authHeader(),
        },
      )
      .then((result) => {
        console.log('연결');
        console.log(Object.entries(result.data)[0][1]);
        setCampaign(result.data);
        setTotlaPage(Object.entries(result.data)[0][1].totalElements);
        setPageSize(Object.entries(result.data)[0][1].pageable.pageSize);

        let response = Object.entries(result.data)[0][1].content;
        setResult(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        console.log('연결실패');
      });

    return () => {};
  }, [ text, storePage, setTotlaPage, setPageSize]);

  return (
    <Box
      sx={{
        marginTop: "30px"
      }}
    >
      {Object.keys(campaign) !== undefined &&
        Object.entries(campaign)[0] !== undefined && (
          <>
            <ListBox>
              {menuList}
            </ListBox>
          </>
        )}
    </Box>
  );
};

export default TextMiningPageDonationList;

const ListBox = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
}));

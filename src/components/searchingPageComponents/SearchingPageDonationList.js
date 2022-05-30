import React, { useState, useEffect } from 'react';
import { Box, styled, Grid } from '@mui/material';

import Card from '../DonationCard';
import axios from 'axios';
import { SearchPageStore } from '../../store/SearchPageStore';
import { useInView } from 'react-intersection-observer';
import { CategoryStore } from '../../store/CategoryPageStore';
import { authHeader } from '../authenticationFunc';

const TagPageDonationList = () => {
  const [campaign, setCampaign] = useState({});

  const [result, setResult] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [ref, inView] = useInView();

  const { categoryIndex, word, num, setNum } = SearchPageStore(); //zustand
  const { setTotlaPage, setPageSize, sortValue, storePage } =
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

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      fetchMoreData();
    }
  }, [inView, loading]);

  useEffect(() => {
    let a = `http://localhost:8080/api/campaigns?page=${storePage}&size=20&keyword=${word}&${sortValue}`;
    axios
      .get(a, {
          headers: authHeader(),
        },)
      .then((result) => {
        console.log('연결');
        console.log(Object.entries(result.data)[0][1]);
        setCampaign(result.data);
        setNum(Object.entries(result.data)[0][1].totalElements);
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
  }, [categoryIndex, storePage, sortValue, setTotlaPage, setPageSize]); //category, storePage, sortValue

  return (
    <>
      {
        num ?
        (
          <>
            <Box
              sx={{
                m: "10px 0 10px 15px",
                fontWeight: 500,
                fontFamily: "Noto Sans KR",
                fontSize: "20px",
              }}
            >
              마음 <span style={{ color: "#f48fb1", fontWeight: 700 }}>{num}</span>개
            </Box>

            <Box
              sx={{
                marginTop: "20px",
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
          </>
        ) : (
          <Grid container justifyContent="center"
            sx={{
              margin: "50px 0 1000px 0",
              fontWeight: 400,
              fontFamily: "Noto Sans KR",
              fontSize: "20px",
              color: "#696969"
            }}
          >
            검색결과가 없습니다.
          </Grid>
        )
      }

    </>
  );
};

export default TagPageDonationList;

const ListBox = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
}));

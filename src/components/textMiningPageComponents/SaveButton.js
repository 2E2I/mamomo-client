import React, { useState, useEffect } from 'react';
import {
  Button,
  Box,
  styled,
  Divider,
  Alert,
} from '@mui/material';

import axios from 'axios';

import Card from '../DonationCard';
import { useInView } from 'react-intersection-observer';
import { CategoryStore } from '../../store/CategoryPageStore';
import { authHeader } from '../authenticationFunc';
import { TextMiningPageStore } from '../../store/TextMiningPageStore';

import Paging from '../Paging';

// 텍스트마이닝 버튼
const SaveButton = () => {

  const { text } = TextMiningPageStore();

  const [click, setClick] = useState(false);
  const [num, setNum] = useState(0);
  const [campaign, setCampaign] = useState({});

  const [result, setResult] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [ref, inView] = useInView();

  const { setTotlaPage, setPageSize, storePage } =
    CategoryStore(); //zustand

  const fetchMoreData = async () => {
    setLoading(true);
    setResult(result.concat(items.slice(0, 8)));
    setItems(items.slice(8));
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
  
  const onClick = async () => {
    text.length < 1 ? (
      console.log('텍스트를 입력하세요')
    ) : (
    // let url = `http://localhost:8080/api/textMining?page=${storePage}&size=8`;
    await axios
      .post(`http://localhost:8080/api/textMining?page=${storePage}&size=8`,
        {
          text: text
        },
        {
          headers: authHeader()
        },
      )
      .then((res) => {
        console.log(res.data);
        console.log(Object.entries(res.data)[0][1]);
        setClick(true);
        setNum(Object.entries(res.data)[0][1].totalElements);
        setCampaign(res.data);
        setTotlaPage(Object.entries(res.data)[0][1].totalElements);
        setPageSize(Object.entries(res.data)[0][1].pageable.pageSize);

        let response = Object.entries(res.data)[0][1].content;
        setResult(response);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      })
    )
  };

  useEffect( () => {
    let url = `http://localhost:8080/api/textMining?page=${storePage}&size=8`;
    axios
      .post(url,
        {
          text: text
        },
        {
          headers: authHeader(),
        },
      )
      .then((res) => {
        console.log('연결');
        console.log(Object.entries(res.data)[0][1]);
        setClick(true);
        setNum(Object.entries(res.data)[0][1].totalElements);
        setCampaign(res.data);
        setTotlaPage(Object.entries(res.data)[0][1].totalElements);
        setPageSize(Object.entries(res.data)[0][1].pageable.pageSize);

        let response = Object.entries(res.data)[0][1].content;
        setResult(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {};
  }, [ storePage, setTotlaPage, setPageSize ]);

  return (
    <Box>
      <Button
        variant="contained"
        sx={{
          m: "50px 0 0 440px",
          width: "120px",
          backgroundColor: "#f27777",
          boxShadow: "0",
          ":hover": {
            backgroundColor: "#f27777",
            boxShadow: "0",
          },
          fontFamily: "Noto Sans KR",
          fontSize: "15px",
          fontWeight: 400,
        }}
        onClick={ onClick }
      >
        텍스트마이닝
      </Button>

      {
        click === true ?
        (
          <Box>
            <Box
              sx={{
                m: "30px 0 10px 0",
                fontWeight: 500,
                fontFamily: "Noto Sans KR",
                fontSize: "20px",
              }}
            >
              마음 <span style={{ color: "#f48fb1", fontWeight: 700 }}>{num}</span>개
            </Box>
            <Divider />
          </Box>
        ) : (
          null
        )
      }

      <Box
        sx={{
          marginTop: "30px",
          height: "620px",
        }}
      >
        {Object.keys(campaign) !== undefined &&
          Object.entries(campaign)[0] !== undefined && (
            <>
              <ListBox container justifyContent="center">
                {menuList}
              </ListBox>
            </>
          )}
      </Box>
      {
        click === true
        ? <Paging />
        : null
      }
    </Box>
  );
}

export default SaveButton;

const ListBox = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
}));
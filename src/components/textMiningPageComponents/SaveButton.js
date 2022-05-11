import React from 'react';
import {
  Button,
} from '@mui/material';

import axios from 'axios';

import { authHeader } from '../authenticationFunc';
import { TextMiningPageStore } from '../../store/TextMiningPageStore';

// 저장 버튼
const SaveButton = () => {

  const { text } = TextMiningPageStore();
  
  const onClick = async () => {
    const data = await axios
      .post(`http://localhost:8080/api/textMining?page=0&size=20`,
        {
          text: text
        },
        {
          headers: authHeader()
        },
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Button
      variant="contained"
      sx={{
        m: "20px 0 0 450px",
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
      완료
    </Button>
  );
}

export default SaveButton;
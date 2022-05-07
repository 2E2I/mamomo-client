import React, { useState } from 'react';
import {
  Button,
} from '@mui/material';

import { SignInStore } from '../../../store/SignInPageStore';
import { ModifyProfileStore } from '../../../store/ModifyProfileStore';
import { authHeader } from '../../authenticationFunc';
import axios from 'axios';

// 저장 버튼
const SaveButton = () => {

  const { email } = SignInStore();
  const { mNickname } = ModifyProfileStore();
  
  const onClick = async () => {
    const data = await axios
      .patch(`http://localhost:8080/api/user/profile/${email}`,
        {
          nickname : "리액트망할놈"
        },
        {
          headers: authHeader()
        },
      )
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Button
      variant="contained"
      sx={{
        m: "100px 0 0 300px",
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
      저장
    </Button>
  );
}

export default SaveButton;
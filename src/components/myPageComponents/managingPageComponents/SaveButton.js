import React, { useState } from 'react';
import {
  Grid,
  Button,
  createTheme,
  ThemeProvider,
  Box
} from '@mui/material';

import axios from 'axios';

// 로그인 버튼
const SaveButton = () => {

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
      >
        저장
      </Button>
  );
}

export default SaveButton;
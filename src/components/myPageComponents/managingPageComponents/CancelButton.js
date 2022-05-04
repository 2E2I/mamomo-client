import React, { useState } from 'react';
import {
  Grid,
  Button,
  createTheme,
  ThemeProvider,
  Box
} from '@mui/material';

import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// 로그인 버튼
const CancelButton = () => {

  const history = useHistory();

  return (
      <Button
        variant="contained"
        // href="/my/mange"
        sx={{
          m: "100px 0 0 10px",
          backgroundColor: "#9e9e9e",
          boxShadow: "0",
          ":hover": {
            backgroundColor: "#9e9e9e",
            boxShadow: "0",
          },
          fontFamily: "Noto Sans KR",
          fontSize: "15px",
          fontWeight: 400,
        }}
        onClick={()=> { window.location.reload(); }}
      >
        취소
      </Button>
  );
}

export default CancelButton;
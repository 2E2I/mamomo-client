import React, { useEffect } from 'react';
import {
  Grid,
  TextField,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import { useState } from 'react';
import { SignUpStore } from '../../store/SignUpPageStore';

// 닉네임 입력란
const Nickname = () => {
  const theme = createTheme({
    palette: {
      gray: {
        main: '#cecece',
        contrastText: '#fff',
      },
    },
  });

  const { nickname, setNickname } = SignUpStore();
  const [msg, setMsg] = useState('');
  const [isNickname, setIsNickname] = useState('');

  function Validation() {
    if (nickname !== "") {
      setIsNickname(true);
    }
    else if (nickname === "") {
      setMsg("닉네임을 입력하세요.");
      setIsNickname(false);
    }
  }

  useEffect(() => {
    Validation();
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid
        sx={{
          margin: "30px 0 0 0",
        }}
      >
        <Grid container justifyContent="center">
          <TextField
            label="닉네임"
            variant="outlined"
            placeholder="특수문자 제외 2~10자"
            color="gray"
            sx={{
              width: "400px"
            }}
            onChange={ (e) => {
              setNickname(e.target.value)
            }}
          >
          </TextField>
        </Grid>
        {
          isNickname === true
          ? null
          :
            <Grid span
            margin="10px 0 0 0"
            fontSize="12px"
            color="#ff0000"
            >
              {msg}
            </Grid>
        }

      </Grid>
      
    </ThemeProvider>
  );
}

export default Nickname;
import React from 'react';
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

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
        <TextField
          label="닉네임"
          variant="outlined"
          placeholder="특수문자 제외 2~10자"
          color="gray"
          sx={{
            margin: "30px 0 0 0",
            width: "400px",
          }}
          onChange={ (e) => {
            setNickname(e.target.value)
          }}
        >
        </TextField>
      </Grid>
    </ThemeProvider>
  );
}

export default Nickname;
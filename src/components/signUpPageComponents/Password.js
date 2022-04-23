import React from 'react';
import {
  Grid,
  TextField,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import { useState } from 'react';
import { SignUpStore } from '../../store/SignUpPageStore';

// Password 입력란
const Password = () => {
  const theme = createTheme({
    palette: {
      gray: {
        main: '#cecece',
        contrastText: '#fff',
      },
    },
  });

  const { password, setPassword } = SignUpStore();

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
        <TextField
          label="비밀번호"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          placeholder="영문, 숫자 포함 8~14자"
          color="gray"
          sx={{
            margin: "30px 0 0 0",
            width: "400px",
          }}
          onChange={ (e) => {
            setPassword(e.target.value)
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}

export default Password;
import React, { useEffect, useState } from 'react';
import {
  Grid,
  TextField,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { SignUpStore } from '../../store/SignUpPageStore';

// email 입력란
const Email = () => {
  const theme = createTheme({
    palette: {
      gray: {
        main: '#cecece',
        contrastText: '#fff',
      },

      lightGray: {
        main: '#a8a8a8'
      },

      green: {
        main: '#2db400'
      }
    },
  });

  const { email, setEmail } = SignUpStore();
  const isEmail = (email) => {
    const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return emailRegex.test(email);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center"
        sx={{
          margin: "30px 0 0 0",
        }}
      >
        <Grid container justifyContent="center">
          <TextField
            required
            label="이메일"
            variant="outlined"
            placeholder="example@example.com"
            color="gray"
            sx={{
              margin: "5px 0 0 0",
              width: "400px",
            }}
            onChange={ (e) => {
              setEmail(e.target.value)
            }}
          >
          </TextField>
          {
            isEmail(email) === true ?
            (
              <CheckCircleIcon
                color="green"
                sx={{
                  m: "20px 0 0 10px",
                }}
              />
            ) : (
              <CheckCircleIcon
                color="lightGray"
                sx={{
                  m: "20px 0 0 10px",
                }}
              />
            )
          }
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Email;
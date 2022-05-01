import React from 'react';
import {
  Grid,
  TextField,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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

    lightGray: {
      main: '#a8a8a8'
    },

    green: {
      main: '#2db400'
    }
  });

  const { password, setPassword } = SignUpStore();
  const isPassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,12}$/;

    return passwordRegex.test(password);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
        <TextField
          required
          label="비밀번호"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          placeholder="영문, 숫자 포함 8~12자"
          color="gray"
          sx={{
            margin: "30px 0 0 0",
            width: "400px",
          }}
          onChange={ (e) => {
            setPassword(e.target.value)
          }}
        >
        </TextField>
        {
          isPassword(password) === true ?
          (
            <CheckCircleIcon
              sx={{
                m: "45px 0 0 10px",
                color: "#2db400",
              }}
            />
          ) : (
            <CheckCircleIcon
              sx={{
                m: "45px 0 0 10px",
                color: "#a8a8a8",
              }}
            />
          )
        }
      </Grid>
    </ThemeProvider>
  );
}

export default Password;
import React, { useEffect, useState } from 'react';
import {
  Grid,
  Box,
  TextField,
  createTheme,
  ThemeProvider,
  styled,
} from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { SignUpStore } from '../../store/SignUpPageStore';

// Password 재확인
const CheckingPassword = () => {
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

  const [pw, setPw] = useState('');
  const { password, setPassword } = SignUpStore();
  const [msg, setMsg] = useState('');
  const [isPw, setIsPw] = useState('');

  function Validation() {
    if (pw !== "" && password != "" && pw === password) {
      setMsg("비밀번호가 일치합니다.");
      setIsPw(true);
    }
    else if (pw !== "" && password != "" && pw !== password){
      setMsg("비밀번호가 일치하지않습니다.");
      setIsPw(false);
    }
  }

  useEffect(() => {
    Validation();
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
        <TextField
          required
          label="비밀번호 재확인"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          color="gray"
          sx={{
            margin: "30px 0 0 0",
            width: "400px",
          }}
          onChange={ (e) => {
            setPw(e.target.value)
          }}
        >
        </TextField>
        {
          isPw === true ?
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
      {/* {
        isPw === true
        ?
          <Grid
          container justifyContent="center"
          //margin="10px 0 0 0"
          fontSize="12px"
          color="#2DB400"
          >
            {msg}
          </Grid>
        :
          <Grid
          container justifyContent="center"
          //margin="10px 0 0 0"
          fontSize="12px"
          color="#ff0000"
          >
            {msg}
          </Grid>
      } */}
    </ThemeProvider>
  );
}

export default CheckingPassword;

const fontGrid = styled(Grid)(() => ({
  fontSize: 12,
  fontolor: '#ff000a',
}));

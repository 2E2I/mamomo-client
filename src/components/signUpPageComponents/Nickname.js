import React, { useEffect } from 'react';
import {
  Grid,
  TextField,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { SignUpStore } from '../../store/SignUpPageStore';

// 닉네임 입력란
const Nickname = () => {
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

  const { nickname, setNickname } = SignUpStore();

  const isNickname = (nickname) => {
    const nicknameRegex = RegExp("^[가-힣ㄱ-ㅎa-zA-Z0-9._-]{2,10}\$")

    return nicknameRegex.test(nickname);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <Grid
        sx={{
          margin: "30px 0 0 0",
        }}
      > */}
        <Grid container justifyContent="center">
          <TextField
            required
            label="닉네임"
            variant="outlined"
            placeholder="특수문자, 공백 제외 2~10자"
            color="gray"
            sx={{
              margin: "30px 0 0 0",
              width: "400px"
            }}
            onChange={ (e) => {
              setNickname(e.target.value)
            }}
          >
          </TextField>
          {
            isNickname(nickname) === true ?
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
        } */}
      {/* </Grid>    */}
    </ThemeProvider>
  );
}

export default Nickname;
import React, { useState } from 'react';
import {
  Grid,
  Button,
  createTheme,
  ThemeProvider
} from '@mui/material';

import axios from 'axios';
import { SignUpStore } from '../../store/SignUpPageStore';
import { useHistory } from 'react-router-dom';

// 회원가입 버튼
const SignUp = () => {
  const theme = createTheme({
    palette: {
      main: {
        main: '#FEBCBC',
        contrastText: '#fff',
      },
    },
  });

  const { email, password, nickname, sex, birth, favTopics, btnOnClick, setBtnOnClick } = SignUpStore();
  const history = useHistory();

  const onClick = async () => {
    try {
      await axios
        .post("http://localhost:8080/api/user/signup", {
          email: email,
          password: password,
          nickname: nickname,
          sex: sex,
          birth: birth,
          favTopics: favTopics, 
        })
        .then((res) => {
          console.log(res.data);
          if (res.status === 200) {
            console.log('회원가입 성공');
            history.push('/signin');
          }
        })
    } catch (e) {
      console.log(e);
      console.log('회원가입 실패');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
       <Button
        variant="contained"
        color="main"
        sx={{
          m: "40px",
          width: "400px",
          height: "50px",
          boxShadow: '0',
          ":hover": {
            boxShadow: '0'
          },
          fontFamily: 'Noto Sans KR',
          fontSize: "18px",
          fontWeight: 400,
        }}
        onClick={
          onClick
        }
      >
          가입하기
        </Button>
      </Grid>
    </ThemeProvider>
  );
}

export default SignUp;
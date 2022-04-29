import React, { useState } from 'react';
import {
  Grid,
  Button,
  createTheme,
  ThemeProvider,
  Box
} from '@mui/material';

import axios from 'axios';
import { SignInStore } from '../../store/SignInPageStore';
import { useHistory } from "react-router-dom"; // <Route>로 감싸지지 않은 컴포넌트에서 history 사용

// 로그인 버튼
const SignIn = () => {
  const theme = createTheme({
    palette: {
      main: {
        main: '#FEBCBC',
        contrastText: '#fff',
      },
    },
  });
  
  const { email, password, keepingSignIn } = SignInStore();
  const history = useHistory();
  const [error, setError] = useState(false);

  const onClick = async () => {
    try {
      await axios
        .post("http://localhost:8080/api/user/authenticate", {
          email: email,
          password: password,
          //keepingSignIn: keepingSignIn,
        })
        .then((res) => {
          console.log(res.data) // 토큰
          setError(false);
          
          const { accessToken } = res.data;
          //axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

          if (res.status === 200) {
            console.log('로그인 성공')
            history.push('/')
          }
        })
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
        <Button
          variant="contained"
          color="main"
          sx={{
            m: "15px 0 0 0",
            width: "400px",
            height: "55px",
            boxShadow: '0',
            ":hover": {
              boxShadow: '0'
            },
            fontFamily: 'Noto Sans KR',
            fontSize: "16px",
            fontWeight: 400,
          }}
          onClick={ onClick }
        >
          로그인
        </Button>
      </Grid>
      {
        error === true
        ? <Grid
            container justifyContent="center"
            margin="10px 0 0 0"
            fontSize="12px"
            color="#ff0000"
          >
            이메일 또는 비밀번호를 확인해주세요
          </Grid>
        : null
      }
    </ThemeProvider>
    
  );
}

export default SignIn;
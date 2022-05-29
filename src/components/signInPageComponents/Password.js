import React, { useEffect } from 'react';
import {
  Grid,
  TextField,
  createTheme,
  ThemeProvider,
} from '@mui/material';


import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { SignInStore } from '../../store/SignInPageStore';
import { SignUpStore } from '../../store/SignUpPageStore';
import { UserProfileStore } from '../../store/UserProfileStore';

// Password 입력란
const Password = () => {
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

  const { email, password, setPassword, setStatus, error, setError } = SignInStore();
  const { setImg, setNickname, setSex, setBirthday, setFavTopics } = UserProfileStore();
  const history = useHistory();

  const userFavTopics = [];

  const { setEmail } = SignUpStore();
  
  useEffect(() => {
    setEmail('');
  }, []);

  const onClick = async () => {
    axios
      .post("http://localhost:8080/api/user/authenticate", {
        email: email,
        password: password,
      })
      .then((res) => {
        setError(false);
        setStatus(true);

        console.log(res.data.profile.birth);

        for (var i = 0; i < (Object.values(res.data.profile.favTopics).length); i++) {
          userFavTopics.push(Object.values(res.data.profile.favTopics)[i].topic.id)
        }

        if (res.status === 200) {
          localStorage.setItem('user', res.data.token);
          setImg(res.data.profile.profileImgUrl);
          setNickname(res.data.profile.nickname);
          setBirthday(res.data.profile.birth);
          setSex(res.data.profile.sex);
          setFavTopics(userFavTopics);
          console.log('로그인 성공');
          history.push('/');
        }
      })
      .catch((e) => {
        console.log(e);
        setError(true);
        setStatus(false);
      });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter')
      onClick();
  }


  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
        <TextField
          label="비밀번호"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          // placeholder="비밀번호"
          color="gray"
          sx={{
            margin: "15px 0 0 0",
            width: "400px",
          }}
          onChange={ (e) => {
            setPassword(e.target.value)
          }}
          onKeyDown= { onKeyPress }
        />
      </Grid>
    </ThemeProvider>
  );
}

export default Password;
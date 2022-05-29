import React from 'react';
import {
  Grid,
  TextField,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { SignInStore } from '../../store/SignInPageStore';
import { UserProfileStore } from '../../store/UserProfileStore';

// email 입력란
const Email = () => {
  const theme = createTheme({
    palette: {
      gray: {
        main: '#cecece',
        contrastText: '#fff',
      },
    },
  });

  const { email, password, setEmail, setStatus, error, setError } = SignInStore();
  const { setImg, setNickname, setSex, setBirthday, setFavTopics } = UserProfileStore();
  const history = useHistory();

  const userFavTopics = [];

  const onClick = async () => {
    await axios
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
          label="이메일"
          variant="outlined"
          // placeholder="이메일"
          color="gray"
          sx={{
            margin: "5px 0 0 0",
            width: "400px",
          }}
          onChange={ (e) => {
            setEmail(e.target.value)
          }}
          onKeyDown= { onKeyPress }
        >
        </TextField>
      </Grid>
    </ThemeProvider>
    
  );
}

export default Email;
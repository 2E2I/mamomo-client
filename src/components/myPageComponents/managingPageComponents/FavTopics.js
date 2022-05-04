import React, { useState, useEffect } from 'react';
import {
  createTheme,
  ThemeProvider,
  FormControlLabel,
  Checkbox,
  Box,
  Grid,
} from '@mui/material';

import axios from 'axios';

import { SignUpStore } from '../../../store/SignUpPageStore';
import { SignInStore } from '../../../store/SignInPageStore';

import { authHeader } from '../../authenticationFunc';


// 관심 기부 분야 checkBox
const FavTopics = () => {
  const theme = createTheme({
    palette: {
      gray: {
        main: '#cecece',
        contrastText: '#fff',
      },
      pink: {
        main: '#FEBCBC',
      },
    },
  });

  const { favTopics, setFavTopics } = SignUpStore();
  const { email } = SignInStore();

  const [tag, setTag] = useState('');
  const categories = Object.values(tag);
  const list = categories[0];

  var userFavTopics = [];

  const categoryList =
    list &&
      list.map((tag, index) => (
        <Box
          component="span"
          sx={{
            p: "5px 5px 10px 10px",
            margin: "5px",
            border: 1,
            borderRadius: '5px',
            borderColor: "#adadad",
          }}
        >
          <FormControlLabel
            component="fieldset"
            variant="standard"
            key={index}
            control={<Checkbox color='pink'/>}
            label={tag}
            //checked={ userFavTopics.includes(index) ? true : false }
            onChange={ (e) => {
              if (e.target.checked) {
                userFavTopics.push(index + 1)
                userFavTopics.sort(function(a, b) { return a - b });
                console.log(userFavTopics);
              } else {
                userFavTopics.pop()
                console.log(userFavTopics);
              }
            }}
          />
        </Box>
    ));

    useEffect(() => {
      axios
        .get(`http://localhost:8080/api/categories`)
        .then((result) => {
          console.log('연결');
          setTag(result.data);
        })
        .catch(() => {
          console.log('연결실패');
        });
      return () => {};
    }, []);

  useEffect(() => {
    axios
    .get(
      `http://localhost:8080/api/user/${email}`, {
        headers: authHeader()
      }
    )
    .then((res) => {
      console.log('연결');
      for (var i = 0; i < (Object.values(res.data.user.favTopic).length); i++) {
        userFavTopics.push(Object.values(res.data.user.favTopic)[i].topic.id)
      }
      console.log(userFavTopics);
    })
    .catch((e) => {
      console.log(e);
    })
  }, [email]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
        <Box
          sx={{
            m: "50px 0 0 20px",
            width: "700px",
            //border: 1
          }}
        >
          <Box
            component="span"
            sx={{
              fontSize: "15px",
              fontFamily: "Noto Sans KR",
              fontWeight: 500
            }}
          >
            관심 기부 분야
          </Box>
          <Box
            sx={{
              width: "700px",
              margin: "20px 0 0 0",
              border: 1,
              borderColor: "#a6a6a6",
              p: "7px 3px 7px 3px"
            }}
          >
            {categoryList}
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  )
}

export default FavTopics;
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

import { UserProfileStore } from '../../../store/UserProfileStore';
import { ModifyProfileStore } from '../../../store/ModifyProfileStore';


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

  const { favTopics, setFavTopics } = UserProfileStore();
  const { mFavTopics, setMFavTopics } = ModifyProfileStore();
  
  const [tag, setTag] = useState('');
  const categories = Object.values(tag);
  const list = categories[0];

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
            control={
              <Checkbox
                color='pink'
                defaultChecked={ mFavTopics.includes(index + 1) ? true : null }
              />
            }
            label={tag}
            onChange={ (e) => {
              if (e.target.checked) {
                mFavTopics.push(index + 1)
                mFavTopics.sort(function(a, b) { return a - b });
                console.log(mFavTopics);
              } else {
                mFavTopics.pop()
                console.log(mFavTopics);
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
    setMFavTopics(favTopics);
  }, [favTopics, setMFavTopics])

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
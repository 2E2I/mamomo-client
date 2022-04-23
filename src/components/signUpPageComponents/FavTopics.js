import React from 'react';
import {
  createTheme,
  ThemeProvider,
  FormControlLabel,
  Checkbox,
  Box,
  Grid,
} from '@mui/material';

import { useState, useEffect } from 'react';
import { SignUpStore } from '../../store/SignUpPageStore';
import axios from 'axios';

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
            control={<Checkbox color='pink'/>}
            label={tag}
            onChange={ (e) => {
              if (e.target.checked) {
                favTopics.push(index + 1)
                console.log(favTopics);
              } else {
                favTopics.pop()
                console.log(favTopics);
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

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
        <Box
          sx={{
            width: "400px",
            margin: "30px 0 0 0"
          }}
        >
            <Box
              component="span"
              color="#666666"
            >
              관심 기부 분야
            </Box>
            <Box
              component="span"
              color="#c6c6c6"
              margin="0 0 0 5px"
              fontSize="14px"
            >
              (선택)
            </Box>
          <Box
            sx={{
              width: "400px",
              margin: "10px 0 0 0",
              border: 1,
              borderColor: "#a6a6a6",
              p: '7px 3px 7px 3px'
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
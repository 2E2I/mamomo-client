import React, { useEffect } from 'react';

import { Box, Grid, Paper, InputBase, IconButton  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

import { SearchPageStore } from '../store/SearchPageStore';

export const RoundSearchBar = () => {

  let { word, setWord, initWord } = SearchPageStore();

  useEffect(() => {
    initWord()
  }, [])

  return (
    <Grid container justifyContent="center">
      <Box
        justifyContent="center"
        alignItems="center"
        sx={{
          //margin: '60px',
          width: '960px',
          maxWidth: '100%',
          padding: '0 10px 0 10px'
        }}
      >
        <Paper
          component="form"
          variant="outlined"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            borderRadius: 20,
            borderColor: '#f7f7f7',
            backgroundColor: '#f7f7f7',
            boxShadow: '0',
          }}
        >
          {
            word ? (
              <Link to='/searching'>
                <IconButton
                  type="submit"
                  sx={{
                    "&:hover": {
                      backgroundColor: "transparent",
                      cursor: "default"
                      },
                    p: '10px',
                  }}
                  aria-label="search"
                >
                  <SearchIcon
                    sx={{
                      width: '35px',
                      height: '35px',
                      color: '#424242',
                    }}
                  >
                  </SearchIcon>
                </IconButton>
              </Link>
            ) : (
              <IconButton
                disabled
                type="submit"
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    cursor: "default"
                    },
                  p: '10px',
                }}
                aria-label="search"
              >
                <SearchIcon
                  sx={{
                    width: '35px',
                    height: '35px',
                    color: '#424242',
                  }}
                >
                </SearchIcon>
              </IconButton>
            )
          }

          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              fontWeight: 700,
              fontFamily: 'Noto Sans KR',
              mx: 0,
              fontSize: 20,
              color: '#424242',
            }}
            placeholder="검색어를 입력하세요"
            inputProps={{ 'aria-label': '검색어를 입력하세요' }}
            onChange={ (e) => {
              setWord(e.target.value)
            }}
          />
        </Paper>
      </Box>
    </Grid>
  );
};

export default RoundSearchBar;

import React from 'react';

import { Box, Grid, Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { SearchPageStore } from '../../store/SearchPageStore';

export const RoundSearchBar = () => {

  let { word, setWord } = SearchPageStore();

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
            borderColor: '#9e9e9e',
            boxShadow: '0',
          }}
        >
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>

          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="검색어를 입력하세요"
            value={word}
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

import React from 'react';
import Paper from '@mui/material/Paper';
import { Box, Grid } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
  return (
    <Grid container justifyContent="center">
      <Box
        justifyContent="center"
        alignItems="center"
        sx={{
          //margin: '60px',
          width: '800px',
          padding: '10px 10px 0 10px',
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
            height: '46px',
          }}
        >
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              fontWeight: '400',
              fontFamily: 'Noto Sans KR',
              fontSize: 20,
            }}
            placeholder="검색어를 입력하세요"
            inputProps={{ 'aria-label': '검색어를 입력하세요' }}
          />
        </Paper>
      </Box>
    </Grid>
  );
};

export default SearchBar;

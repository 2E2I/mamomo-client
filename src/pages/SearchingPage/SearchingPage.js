import React from 'react';
import { Container } from '@mui/material';

import TopAppBar from '../../components/TopAppBar';
import RoundSearchBar from '../../components/RoundSearchBar';

import { SearchPageStore } from '../../store/SearchPageStore';

const SearchingPage = () => {

  let { word } = SearchPageStore();

  return (
    <Container
      maxWidth={false}
      sx={{
        width:"1000px",
      }} 
      disableGutters={true}
      justify="center"
    >

      <TopAppBar />
      <RoundSearchBar />

      <hr/>검색어: {word}

    </Container>
  )
}

export default SearchingPage;
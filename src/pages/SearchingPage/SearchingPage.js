import React, { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import TopAppBar from '../../components/TopAppBar';
import RoundSearchBar from '../../components/searchingPageComponents/SearchingPageSearchBar';
import SearchingPageDonationList from '../../components/searchingPageComponents/SearchingPageDonationList'
import Paging from '../../components/Paging';
import SortBox from '../../components/SortBox';

import { SearchPageStore } from '../../store/SearchPageStore';

const SearchingPage = () => {

  let { word, num } = SearchPageStore();

  const onClick = () => {
    <Link to='/searching'></Link>
  }

  const onKeyPress = (e) => {
    if (word != null) {
      if (e.key === 'Enter') {
        onClick();
      }
    }
  }

  useEffect(() => {
    
  })

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
      <RoundSearchBar onKeyDown={onKeyPress} />

      <br /><br />
      
      <SortBox />
      <SearchingPageDonationList />
      <Paging />
      
    </Container>
  )
}

export default SearchingPage;
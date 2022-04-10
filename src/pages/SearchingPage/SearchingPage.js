import React from 'react';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

import TopAppBar from '../../components/TopAppBar';
import RoundSearchBar from '../../components/SearchingPageComponents/SearchingPageSearchBar';
import SearchingPageDonationList from '../../components/SearchingPageComponents/SearchingPageDonationList'
import Paging from '../../components/Paging';
import SortBox from '../../components/SortBox';

import { SearchPageStore } from '../../store/SearchPageStore';

const SearchingPage = () => {

  let { word } = SearchPageStore();

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
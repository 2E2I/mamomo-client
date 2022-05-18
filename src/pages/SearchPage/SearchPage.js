import React from 'react';
import { Grid, Container, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

import TopAppBar from '../../components/TopAppBar';
import RoundSearchBar from '../../components/RoundSearchBar';

import CategoryTagTitle from '../../components/searchPageComponents/CategoryTagTitle';
import CategoryTags from '../../components/searchPageComponents/CategoryTag'
import Top10TagTitle from '../../components/searchPageComponents/Top10TagTitle';
import Top10Tag from '../../components/searchPageComponents/Top10Tag';
import AllTagTitle from '../../components/searchPageComponents/AllTagTitle';
import AllTag from '../../components/searchPageComponents/AllTag';

import { SearchPageStore } from '../../store/SearchPageStore';

const SearchPage = () => {

  let { word } = SearchPageStore();

  const onClick = () => {
    <Link to='/searching'></Link>
  }

  const onKeyPress = (e) => {
    if (word.length >= 2) {
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

      {/* 인기태그 top10 */}
      <Grid container justifyContent="center">
        <Top10TagTitle />
        <Top10Tag />
      </Grid>

      {/* 모든 카테고리 */}
      <Grid container justifyContent="center">
        <CategoryTagTitle />
        <CategoryTags />
      </Grid>

      {/* 전체태그 */}
      <Grid container justifyContent="center">
        <AllTagTitle />
        <AllTag />
      </Grid>

    </Container>
  )
};

export default SearchPage;
import React from 'react';
import { Grid, Container } from '@mui/material';

import TopAppBar from '../../components/TopAppBar';
import RoundSearchBar from '../../components/RoundSearchBar';

import CategoryTagTitle from '../../components/searchPageComponents/CategoryTagTitle';
import CategoryTags from '../../components/searchPageComponents/CategoryTag'
import Top10TagTitle from '../../components/searchPageComponents/Top10TagTitle';
import Top10Tag from '../../components/searchPageComponents/Top10Tag';
import RecoTagTitle from '../../components/searchPageComponents/RecomendationTagTitle'

const SearchPage = () => {
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

      {/* 인기태그 top10 */}
      <Grid container justifyContent="center">
        <Top10TagTitle />
        <Top10Tag />
      </Grid>

      {/* 추천태그 */}
      <Grid container justifyContent="center">
        <RecoTagTitle />
      </Grid>

      {/* 모든 카테고리 */}
      <Grid container justifyContent="center">
        <CategoryTagTitle />
        <CategoryTags />
      </Grid>
    </Container>
  )
};

export default SearchPage;
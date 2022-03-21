import React from 'react';
import { Grid } from '@mui/material';

import TopAppBar from '../../components/TopAppBar';
import RoundSearchBar from '../../components/RoundSearchBar';

import OldTagTitle from '../../components/OldSearchPageTagTitle';
import OldTags from '../../components/OldSearchPageTags';

import CategoryTagTitle from '../../components/searchPageComponents/CategoryTagTitle';
import CategoryTags from '../../components/searchPageComponents/CategoryTag'
import Top10TagTitle from '../../components/searchPageComponents/Top10TagTitle';
import Top10Tag from '../../components/searchPageComponents/Top10Tag';
import RecoTagTitle from '../../components/searchPageComponents/RecomendationTagTitle'

const SearchPage = () => {
  return (
    <div>
      <TopAppBar />
      <RoundSearchBar />

      <hr/>수정 tag
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

      <hr/>old tag
      <OldTagTitle />
      <OldTags />
    </div>
  )
};

export default SearchPage;
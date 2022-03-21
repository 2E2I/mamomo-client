import React from 'react';
import { Grid } from '@mui/material';

import TopAppBar from '../../components/TopAppBar';
import RoundSearchBar from '../../components/RoundSearchBar';

import OldTagTitle from '../../components/OldSearchPageTagTitle';
import OldTags from '../../components/OldSearchPageTags';

import CategoryTagTitle from '../../components/searchPageComponents/CategoryTagTitle';
import CategoryTags from '../../components/searchPageComponents/CategoryTag'

const SearchPage = () => {
  return (
    <div>
      <TopAppBar />
      <RoundSearchBar />

      <hr/>수정 tag
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
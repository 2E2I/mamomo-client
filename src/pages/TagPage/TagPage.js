import React from 'react';
import { Container, Grid } from '@mui/material';

import TopAppBar from '../../components/TopAppBar';
import TagTitle from '../../components/tagPageComponents/TagTitle';
import Paging from '../../components/Paging';
import SortBox from '../../components/SortBox';
import CategoryTagDonationList from '../../components/tagPageComponents/CategoryTagDonationList'
import Top10TagDonationList from '../../components/tagPageComponents/Top10TagDonationList';
import { SearchPageStore } from '../../store/SearchPageStore'

const TagPage = () => {

  const { tagType } = SearchPageStore();

  return (
    <Container
      maxWidth={false}
      sx={{
        width: '1000px',
      }}
      disableGutters={true}
      justify="center"
    >
      <TopAppBar />
      <Grid container justifyContent="center">
        <TagTitle />
        <SortBox />
        {
          tagType === '카테고리태그' && <CategoryTagDonationList />
        }
        {
          tagType === '인기태그'&& <Top10TagDonationList />
        }
        <Paging />
      </Grid>
    </Container>
  );
}

export default TagPage;
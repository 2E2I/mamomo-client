import React from 'react';
import { Container, Grid } from '@mui/material';

import TopAppBar from '../../components/TopAppBar';
import TagTitle from '../../components/tagPageComponents/TagTitle';
import Paging from '../../components/Paging';
import SortBox from '../../components/SortBox';
import CategoryTagDonationList from '../../components/tagPageComponents/CategoryTagDonationList'
import Top10TagDonationList from '../../components/tagPageComponents/Top10TagDonationList';
import AllTagDonationList from '../../components/tagPageComponents/AllTagDonationList';

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

      <TagTitle />
      <SortBox />

      {/* 사용자가 인기태그를 눌렀다면 */}
      {
        tagType === '인기태그' && <Top10TagDonationList />
      }
      
      {/* 사용자가 카테고리태그를 눌렀다면 */}
      {
        tagType === '카테고리태그' && <CategoryTagDonationList />
      }

      {/* 사용자가 모든태그를 눌렀다면 */}
      {
        tagType === '모든태그' && <AllTagDonationList />
      }

      <Paging />
    </Container>
  );
}

export default TagPage;
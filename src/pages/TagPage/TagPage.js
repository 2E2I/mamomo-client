import React from 'react';
import { Container, Grid } from '@mui/material';

import TopAppBar from '../../components/TopAppBar';
import TagPageDonationList from '../../components/tagPageComponents/TagPageDonationList'
import TagTitle from '../../components/tagPageComponents/TagTitle';
import Paging from '../../components/Paging';
import SortBox from '../../components/SortBox';

const TagPage = () => {
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
        <TagPageDonationList />
        <Paging />
      </Grid>
    </Container>
  );
}

export default TagPage;
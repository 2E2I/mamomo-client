import React from 'react';
import { Container, Grid } from '@mui/material';

import TagPageDonationList from '../../components/tagPageComponents/TagPageDonationList'
import TagTitle from '../../components/tagPageComponents/TagTitle';
import TopAppBar from '../../components/TopAppBar';

const TagPage = () => {
  return (
    <Container
      maxwidth="false"
      sx={{
        width:"1000px",
      }} 
      disablegutters="true"
      justify="center"
      >
      
      <TopAppBar />
        <Grid container justifyContent="center">
          <TagTitle/>
          <TagPageDonationList />
        </Grid>
    </Container>
  )
}

export default TagPage;
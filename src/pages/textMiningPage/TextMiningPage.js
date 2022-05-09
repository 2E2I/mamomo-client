import React from 'react';
import { Container, Grid } from '@mui/material';

import TopAppBar from '../../components/TopAppBar';

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
        텍스트마이닝 페이지입니다.
      </Grid>
    </Container>
  );
}

export default TagPage;
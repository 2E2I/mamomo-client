import React from 'react';
import { Container, Grid } from '@mui/material';
import MainTitle from '../../components/signInPageComponents/MainTitle';

const SignInPage = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: '1000px',
      }}
      disableGutters={true}
      justify="center"
    >
      <Grid container justifyContent="center">
        <MainTitle />
      </Grid>
    </Container>
  );
}

export default SignInPage;
import React from 'react';
import { Container, Grid } from '@mui/material';
import MainTitle from '../../components/signInPageComponents/MainTitle';
import ID from '../../components/signInPageComponents/ID';
import Password from '../../components/signInPageComponents/Password';

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
        <ID />
        <Password />
      </Grid>
    </Container>
  );
}

export default SignInPage;
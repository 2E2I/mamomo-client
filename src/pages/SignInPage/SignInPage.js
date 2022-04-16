import React from 'react';
import { Container, Grid } from '@mui/material';

import MainTitle from '../../components/signInPageComponents/MainTitle';
import Email from '../../components/signInPageComponents/Email';
import Password from '../../components/signInPageComponents/Password';
import SignIn from '../../components/signInPageComponents/SignIn';
import KeepingSignIn from '../../components/signInPageComponents/KeepingSignIn';
import SplitedLine from '../../components/signInPageComponents/SplitedLine';

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
        <Email />
        <Password />
        <SignIn />
        <KeepingSignIn />
        <SplitedLine />
      </Grid>
    </Container>
  );
}

export default SignInPage;
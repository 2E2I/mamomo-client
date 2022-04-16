import React from 'react';
import { Container, Grid } from '@mui/material';

import MainTitle from '../../components/signInPageComponents/MainTitle';
import Email from '../../components/signInPageComponents/Email';
import Password from '../../components/signInPageComponents/Password';
import SignInButton from '../../components/signInPageComponents/SignInButton';
import KeepingSignInButton from '../../components/signInPageComponents/KeepingSignInButton';
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
        <SignInButton />
        <KeepingSignInButton />
        <SplitedLine />
      </Grid>
    </Container>
  );
}

export default SignInPage;
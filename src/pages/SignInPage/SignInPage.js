import React from 'react';
import { Container, Grid } from '@mui/material';

import MainTitle from '../../components/signInPageComponents/MainTitle';
import Email from '../../components/signInPageComponents/Email';
import Password from '../../components/signInPageComponents/Password';
import SignIn from '../../components/signInPageComponents/SignIn';
import KeepingSignIn from '../../components/signInPageComponents/KeepingSignIn';
import SplitedLine from '../../components/signInPageComponents/SplitedLine';
import SignUp from '../../components/signInPageComponents/SignUp';
import FindingPassword from '../../components/signInPageComponents/FindingPassword';

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
        <SignUp />
        <FindingPassword />
      </Grid>
    </Container>
  );
}

export default SignInPage;
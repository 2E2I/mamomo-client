import React, { useEffect } from 'react';
import { Container, Grid } from '@mui/material';

import MainTitle from '../../components/MainTitle';
import Email from '../../components/signInPageComponents/Email';
import Password from '../../components/signInPageComponents/Password';
import SignIn from '../../components/signInPageComponents/SignIn';
import KeepingSignIn from '../../components/signInPageComponents/KeepingSignIn';
import SplitedLine from '../../components/SplitedLine';
import SignUp from '../../components/signInPageComponents/SignUp';

import { SignInStore } from '../../store/SignInPageStore';

const SignInPage = () => {
  
  const { status, setEmail, setPassword } = SignInStore()

  useEffect(() => {
    if (status === false) {
      setEmail('');
      setPassword('');
    } else {
      return
    }
  }, [status, setEmail, setPassword])

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
        {/* <FindingPassword /> */}
      </Grid>
    </Container>
  );
}

export default SignInPage;
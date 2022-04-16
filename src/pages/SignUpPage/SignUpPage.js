import React from "react";
import { Container, Grid } from '@mui/material';

import MainTitle from '../../components/MainTitle';
import Email from "../../components/signUpPageComponents/Email";
import Password from "../../components/signUpPageComponents/Password";
import CheckingPassword from "../../components/signUpPageComponents/CheckingPassword";
import Nickname from "../../components/signUpPageComponents/Nickname";
import Sex from "../../components/signUpPageComponents/Sex";
import SplitedLine from "../../components/SplitedLine";

const SignUpPage = () => {
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
        <CheckingPassword />
        <Nickname />
        <Sex />
        <SplitedLine />
      </Grid>
    </Container>
  )
}

export default SignUpPage;
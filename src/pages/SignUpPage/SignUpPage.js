import React from "react";
import { Container, Grid } from '@mui/material';

import MainTitle from '../../components/MainTitle';
import Email from "../../components/signUpPageComponents/Email";
import Password from "../../components/signUpPageComponents/Password";
import CheckingPassword from "../../components/signUpPageComponents/CheckingPassword";
import Nickname from "../../components/signUpPageComponents/Nickname";
import Sex from "../../components/signUpPageComponents/Sex";
import SplitedLine from "../../components/SplitedLine";
import Birth from "../../components/signUpPageComponents/Birth";
import FavTopics from "../../components/signUpPageComponents/FavTopics";
import SignUp from "../../components/signUpPageComponents/SignUp";

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
        <Birth />
        <FavTopics />
        <SignUp />
      </Grid>
    </Container>
  )
}

export default SignUpPage;
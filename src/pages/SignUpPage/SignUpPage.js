import React from "react";
import { Container, Grid } from '@mui/material';

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
        회원가입페이지입니다.
      </Grid>
    </Container>
  )
}

export default SignUpPage;
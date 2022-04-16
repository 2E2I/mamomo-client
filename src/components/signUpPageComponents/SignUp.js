import React from 'react';
import {
  Grid,
  Button,
  createTheme,
  ThemeProvider
} from '@mui/material';

// 회원가입 버튼
const SignUp = () => {
  const theme = createTheme({
    palette: {
      main: {
        main: '#FEBCBC',
        contrastText: '#fff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
       <Button
        variant="contained"
        color="main"
        sx={{
          m: "40px",
          width: "400px",
          height: "50px",
          boxShadow: '0',
          ":hover": {
            boxShadow: '0'
          },
          fontFamily: 'Noto Sans KR',
          fontSize: "18px",
          fontWeight: 400,
        }}
      >
          가입하기
        </Button>
      </Grid>
    </ThemeProvider>
  );
}

export default SignUp;
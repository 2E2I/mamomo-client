import React from 'react';
import {
  Grid,
  Button,
  createTheme,
  ThemeProvider
} from '@mui/material';

// 로그인 버튼
const SignIn = () => {
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
          m: "15px 0 0 0",
          width: "400px",
          height: "55px",
          boxShadow: '0',
          ":hover": {
            boxShadow: '0'
          },
          fontFamily: 'Noto Sans KR',
          fontSize: "16px",
          fontWeight: 400,
        }}
      >
          로그인
        </Button>
      </Grid>
    </ThemeProvider>
    
  );
}

export default SignIn;
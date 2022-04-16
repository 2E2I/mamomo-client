import React from 'react';
import {
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Grid,
} from '@mui/material';

const SignUp = () => {
  const theme = createTheme({
    palette: {
      gray: {
        main: '#666666',
        contrastText: '#fff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          margin: "5px",
          width: "150px",
        }}
      >
        <Grid container justifyContent="left">
          <Button
            variant="text"
            color="gray"
            sx={{
              ":hover": {
                backgroundColor: '#fff'
              },
              fontSize: "13px"
            }}
          >
            회원가입
          </Button>
        </Grid>
      </Box>
    </ThemeProvider>

  )
}

export default SignUp;
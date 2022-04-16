import React from 'react';
import { Grid, TextField, createTheme, ThemeProvider, Box, styled } from '@mui/material';

// Password 입력란
const Password = () => {
  const theme = createTheme({
    palette: {
      gray: {
        main: '#cecece',
        contrastText: '#fff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
        <TextField
          id="standard-password-input"
          type="password"
          variant="standard"
          autoComplete="current-password"
          placeholder="비밀번호"
          color="gray"
          margin="normal"
        />
      </Grid>
    </ThemeProvider>
    
  );
}

export default Password;
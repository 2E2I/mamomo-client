import React from 'react';
import { Grid, TextField, createTheme, ThemeProvider } from '@mui/material';

// ID 입력란
const ID = () => {
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
          id="standard-search"
          type="search"
          variant="standard"
          placeholder="아이디"
          color="gray"
          margin="normal"
        >
        </TextField>
      </Grid>
    </ThemeProvider>
    
  );
}

export default ID;
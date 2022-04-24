import React from 'react';
import {
  Grid,
  TextField,
  createTheme,
  ThemeProvider,
  Box
} from '@mui/material';

import { SignInStore } from '../../store/SignInPageStore';

// email 입력란
const Email = () => {
  const theme = createTheme({
    palette: {
      gray: {
        main: '#cecece',
        contrastText: '#fff',
      },
    },
  });

  const { email, setEmail } = SignInStore();

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
        <TextField
          label="이메일"
          variant="outlined"
          // placeholder="이메일"
          color="gray"
          sx={{
            margin: "5px 0 0 0",
            width: "400px",
          }}
          onChange={ (e) => {
            setEmail(e.target.value)
          }}
        >
        </TextField>
      </Grid>
    </ThemeProvider>
    
  );
}

export default Email;
import React, { useEffect } from 'react';
import {
  Grid,
  TextField,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import { SignInStore } from '../../store/SignInPageStore';
import { SignUpStore } from '../../store/SignUpPageStore';

// Password 입력란
const Password = () => {
  const theme = createTheme({
    palette: {
      gray: {
        main: '#cecece',
        contrastText: '#fff',
      },

      lightGray: {
        main: '#a8a8a8'
      },

      green: {
        main: '#2db400'
      }
    },
  });

  const { password, setPassword } = SignInStore();
  const { setEmail } = SignUpStore();
  
  useEffect(() => {
    setEmail('');
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
        <TextField
          label="비밀번호"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          // placeholder="비밀번호"
          color="gray"
          sx={{
            margin: "15px 0 0 0",
            width: "400px",
          }}
          onChange={ (e) => {
            setPassword(e.target.value)
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}

export default Password;
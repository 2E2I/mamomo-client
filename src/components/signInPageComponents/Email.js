import React, { useEffect } from 'react';
import {
  Grid,
  TextField,
  createTheme,
  ThemeProvider,
  Box
} from '@mui/material';

import { SignInStore } from '../../store/SignInPageStore';
import { SignUpStore } from '../../store/SignUpPageStore';

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
  const { setPassword, setCheckingPassword, setNickname, setSex, setBirth} = SignUpStore();

  useEffect(() => {
    setPassword('');
    setCheckingPassword('');
    setNickname('');
    setSex('');
    setBirth('');
  }, []);

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
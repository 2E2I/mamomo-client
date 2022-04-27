import React, { useEffect, useState } from 'react';
import {
  Grid,
  TextField,
  createTheme,
  ThemeProvider,
} from '@mui/material';

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

  const { email, setEmail } = SignUpStore();
  const [msg, setMsg] = useState('');
  const [isEmail, setIsEmail] = useState('');

  function Validation() {
    if (email !== "") {
      setIsEmail(true);
    }
    else if (email === "") {
      setMsg("이메일을 입력하세요.");
      setIsEmail(false);
    }
  }

  useEffect(() => {
    Validation();
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid
        sx={{
          margin: "30px 0 0 0",
        }}
      >
      <Grid container justifyContent="center">
        <TextField
          label="이메일"
          variant="outlined"
          placeholder="example@example.com"
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
      {/* {
          isEmail === true
          ? null
          :
            <Grid span
            margin="10px 0 0 0"
            fontSize="12px"
            color="#ff0000"
            >
              {msg}
            </Grid>
        } */}
      </Grid>
    </ThemeProvider>
  );
}

export default Email;
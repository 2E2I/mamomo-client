import React from 'react';
import {
  Grid,
  TextField,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import { useState } from 'react';

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

  const [email, setEmail] = useState();

  return (
    <ThemeProvider theme={theme}>
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
            console.log(email)
          }}
        >
        </TextField>
      </Grid>
    </ThemeProvider>
  );
}

export default Email;
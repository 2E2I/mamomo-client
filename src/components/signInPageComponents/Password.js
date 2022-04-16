import React from 'react';
import {
  Grid,
  TextField,
  createTheme,
  ThemeProvider,
} from '@mui/material';

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
        />
      </Grid>
    </ThemeProvider>
  );
}

export default Password;
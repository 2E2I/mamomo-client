import React from 'react';
import {
  Grid,
  TextField,
  createTheme,
  ThemeProvider,
} from '@mui/material';

// Password 재확인
const CheckingPassword = () => {
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
          label="비밀번호 재확인"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          color="gray"
          sx={{
            margin: "25px 0 0 0",
            width: "300px",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}

export default CheckingPassword;
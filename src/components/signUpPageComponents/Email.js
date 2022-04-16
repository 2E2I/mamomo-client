import React from 'react';
import {
  Grid,
  TextField,
  createTheme,
  ThemeProvider,
} from '@mui/material';

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
            width: "300px",
          }}
        >
        </TextField>
      </Grid>
    </ThemeProvider>
  );
}

export default Email;
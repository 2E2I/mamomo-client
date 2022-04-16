import React from 'react';
import {
  Grid,
  TextField,
  createTheme,
  ThemeProvider,
} from '@mui/material';

// 닉네임 입력란
const Nickname = () => {
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
          label="닉네임"
          variant="outlined"
          placeholder="특수문자 제외 2~10자"
          color="gray"
          sx={{
            margin: "30px 0 0 0",
            width: "400px",
          }}
        >
        </TextField>
      </Grid>
    </ThemeProvider>
  );
}

export default Nickname;
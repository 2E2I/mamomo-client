import React from 'react';
import {
  Grid,
  Box,
  FormControlLabel,
  Checkbox,
  createTheme,
  ThemeProvider,
} from '@mui/material';

// 로그인 상태 유지 버튼
const KeepingSignIn = () => {
  const theme = createTheme({
    palette: {
      green: {
        main: '#2DB400',
        contrastText: '#fff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          margin: "15px 0 0 0",
          width: "400px",
        }}
      >
        <Grid container justifyContent="left">
          <FormControlLabel
            control={<Checkbox color='green' />}
            label="로그인 상태 유지"
          />
        </Grid>
      </Box>

    </ThemeProvider>
    
  );
}

export default KeepingSignIn;
import React from 'react';
import {
  Grid,
  Box,
  FormControlLabel,
  Checkbox,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import { SignInStore } from '../../store/SignInPageStore';

// 로그인 상태 유지 버튼 (안 쓸 듯..?)
const KeepingSignIn = () => {
  const theme = createTheme({
    palette: {
      green: {
        main: '#2DB400',
        contrastText: '#fff',
      },
    },
  });

  const { keepingSignIn, setKeepingSignIn } = SignInStore();

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
            onChange={ (e) => {
              if (e.target.checked) {
                setKeepingSignIn(false)
                console.log(keepingSignIn);
              } else {
                setKeepingSignIn(true)
                console.log(keepingSignIn);
              }
            }}
          />
        </Grid>
      </Box>

    </ThemeProvider>
    
  );
}

export default KeepingSignIn;
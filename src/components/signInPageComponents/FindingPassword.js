import React from 'react';
import {
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Grid,
} from '@mui/material';

// 비밀번호 찾기 버튼
const FindingPassword = () => {
  const theme = createTheme({
    palette: {
      gray: {
        main: '#666666',
        contrastText: '#fff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          margin: "5px",
          width: "150px",
        }}
      >
        <Grid container justifyContent="right">
          <Button
            variant="text"
            color="gray"
            sx={{
              ":hover": {
                backgroundColor: '#fff'
              },
              fontSize: "13px"
            }}
          >
            비밀번호 찾기
          </Button>
        </Grid>
      </Box>
    </ThemeProvider>

  )
}

export default FindingPassword;
import React from 'react';
import {
  Grid,
  Box,
  createTheme,
  ThemeProvider
} from '@mui/material';

// basic splited line
const SplitedLine = () => {
  const theme = createTheme({
    palette: {
      ligtGray: {
        main: '#F4F1F1',
        contrastText: '#fff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
      <Box
        sx={{
          margin: '5px',
          width: 300,
          borderTop: 1,
          borderColor: 'lightGray',
        }}
      />
    </Grid>
    </ThemeProvider>
    
  );
};

export default SplitedLine;
import * as React from 'react';
import { Box, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';

export const AngledSearchBar = () => {
  return (
    <Grid container justifyContent="center">
      <Box
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '960px',
          maxWidth: '100%',
          padding: '0 10px 0 10px'
        }}
      >
        <TextField
          sx={{
            '& fieldset': {
              borderRadius: '0px',
            },
          }}
          fullWidth
          label="검색어를 입력하세요"
          id="fullWidth"
        />
      </Box>
    </Grid>
  );
};

export default AngledSearchBar;

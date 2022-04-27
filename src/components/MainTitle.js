import React from 'react';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

// 마모모 메인 타이틀. 클릭 시 메인페이지로 이동
const MainTitle = () => {
  return (
    <Grid container justifyContent="center">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Box
          sx={{
            margin: '70px 0 35px 0',
            fontWeight: 700,
            fontFamily: 'Noto Sans KR',
            mx: 0,
            fontSize: 36,
            color: '#FEBCBC',
          }}
        >
          MAMOMO
        </Box>
      </Link>
    </Grid>
  );
}

export default MainTitle;
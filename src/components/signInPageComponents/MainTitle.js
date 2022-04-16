import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

// 마모모 메인 타이틀. 클릭 시 메인페이지로 이동
const MainTitle = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          display: 'inline',
          fontWeight: 700,
          fontFamily: 'Noto Sans KR',
          mx: 0,
          fontSize: 36,
          color: '#f48fb1',
        }}
      >
        MAMOMO
      </Box>
    </Link>
  );
}

export default MainTitle;
import React from 'react';
import { Box, Grid } from '@mui/material';
import main99 from '../../assets/images/main99.png';
import main98 from '../../assets/images/main98.png';

const MainTestComponent = () => {
  return (
    <div>
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          width: '100%',
          backgroundColor: '#fce4ec',
          backgroundImage: `url(${main99})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fce4ec',
          height: '1000px',
        }}
      >
        <Grid container spacing={0} sx={{ mb: 70 }}>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 700,
                fontFamily: 'Noto Sans KR',
                mx: 0,
                fontSize: 52,
                color: '#424242',
              }}
            >
              기부의 모든 것
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 700,
                fontFamily: 'Noto Sans KR',
                mx: 0,
                fontSize: 52,
                color: '#424242',
              }}
            >
              마모모에서 쉽고 간편하게
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          width: '100%',
          backgroundColor: '#fce4ec',
          //backgroundImage: `url(${main99})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fce4ec',
          height: '800px',
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 500,
                fontFamily: 'Noto Sans KR',
                mx: 0,
                fontSize: 32,
                color: '#424242',
              }}
            >
              국내 모든 기부 플랫폼의 정보를 한눈에 조회하고 한 곳에서
              관리하세요.
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 500,
                fontFamily: 'Noto Sans KR',
                mx: 0,
                fontSize: 32,
                color: '#424242',
              }}
            >
              이제껏 경험 못 했던 쉽고 편리한 기부 서비스,
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 500,
                fontFamily: 'Noto Sans KR',
                mx: 0,
                fontSize: 32,
                color: '#424242',
              }}
            >
              마모모와 함께라면 당신의 일상이 새로워질 거에요.
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MainTestComponent;

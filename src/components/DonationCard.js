import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Paper, Box, Grid, IconButton, styled } from '@mui/material';

import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

const Card = () => {
  return (
    <Root elevation={0}>
      <InnerImage />
      <InnerTitleBox component="div">
        "'재활'이 아닌 '예술'을 누리는 보통의 삶을 꿈꾸다!"
      </InnerTitleBox>
      <InnerOrganizationTitleBox>어린이재단</InnerOrganizationTitleBox>
      {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}> */}
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <InnerPriceBox>349000원</InnerPriceBox>
        </Grid>
        <IconGrid item xs={4}>
          <IconButton aria-label="add to favorites">
            <FavoriteIc />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIc />
          </IconButton>
        </IconGrid>
      </Grid>
      {/* </Box> */}
      {/* 반응형 작업 
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <Box
            sx={{
              display: { xs: 'block', sm: 'none' },
              direction: 'ltr',
              fontWeight: 'bold',
              mx: 0.5,
              fontSize: 12,
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
          >
            100%
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box
            sx={{
              display: { xs: 'block', sm: 'none' },
              direction: 'rtl',
              fontWeight: 'bold',
              mx: 0.5,
              fontSize: 12,
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
          >
            349000원
          </Box>
        </Grid>
      </Grid> */}
      <BorderLinearProgress
        variant="determinate"
        value={(349000 / 4970000) * 100}
      />
    </Root>
  );
};

export default Card;

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#f48fb1' : '#308fe8',
  },
}));

const Root = styled(Paper)(({ theme }) => ({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
//  반응형
//   [theme.breakpoints.down('md')]: {
//     maxWidth: '45%',
//     maxHeight: '300px',
//     minWidth: '45%',
//     minHeight: '240px',
//     margin: 5,
//   },
//  [theme.breakpoints.up('md')]: { 
  [theme.breakpoints.up('xs')]: { 
    maxWidth: 240,
    maxHeight: 300,
    minWidth: 240,
    minHeight: 240,
    margin: 10,
  },
  [theme.breakpoints.up('lg')]: {
  },
}));

const InnerImage = styled(Box)(() => ({
  //backgroundImage: `url(${sq2})`,
  backgroundImage: `url("https://mud-kage.kakaocdn.net/dn/TSBSF/btrubLNogFE/jcfHPjZskQgfLgxKEwz4aK/c360.jpg")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '6px',
  height: '120px',
}));

const InnerTitleBox = styled(Box)(() => ({
  fontSize: 14,
  fontWeight: 'bold',
  marginTop: 0.4,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  maxHeight: 42,
  //color: "yellow,"
}));

const InnerOrganizationTitleBox = styled(Box)(() => ({
  //display: { xs: "block", sm: "none" },
  direction: 'rtl',
  fontWeight: 'bold',
  mx: 0.5,
  fontSize: 12,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
}));

const InnerPriceBox = styled(Box)(() => ({
  display: 'inline',
  fontWeight: 'bold',
  mx: 0.5,
  fontSize: 12,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
}));

const ShareIc = styled(ShareIcon)(() => ({
  fontSize: 14,
}));

const FavoriteIc = styled(FavoriteIcon)(() => ({
  fontSize: 14,
}));

const IconGrid = styled(Grid)(() => ({
  direction: 'rtl',
}));

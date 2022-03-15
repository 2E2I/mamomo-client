import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Paper, Box, Grid, IconButton, styled } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

const Card = ({ campaign }) => {
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [organizationName, setorganizationName] = useState('');
  const [targetPrice, settargetPrice] = useState(0);
  const [statusPrice, setstatusPrice] = useState(0);

  useEffect(() => {
    setImg(campaign !== undefined && campaign.thumbnail);
    setTitle(campaign !== undefined && campaign.title);
    setorganizationName(campaign !== undefined && campaign.organizationName);
    settargetPrice(campaign !== undefined && campaign.targetPrice);
    setstatusPrice(campaign !== undefined && campaign.statusPrice);
    return () => {};
  }, []);

  const customImgUrl = () => {
    console.log('원본', img);
    const modifyUrEnd = String(img).substring(String(img).indexOf(')') + 1);
    const modifyUrlPre = String(img).substring(0, String(img).indexOf('('));

    const resultUrl = `${modifyUrlPre}${modifyUrEnd}`;

    return resultUrl;
  };

  return (
    <Root elevation={0}>
      <InnerImage img={customImgUrl()} />
      <InnerTitleBox component="div">{title}</InnerTitleBox>
      <InnerOrganizationTitleBox>{organizationName}</InnerOrganizationTitleBox>
      {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}> */}
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <InnerPriceBox>{statusPrice}</InnerPriceBox>
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
        value={(targetPrice / statusPrice) * 100}
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
  width: 240,
  margin: 10,
  //  반응형
  //   [theme.breakpoints.down('md')]: {
  //     maxWidth: '45%',
  //     maxHeight: '300px',
  //     minWidth: '45%',
  //     minHeight: '240px',
  //     margin: 5,
  //   },
  //  [theme.breakpoints.up('md')]: {
  //[theme.breakpoints.up('xs')]: {
  // maxWidth: 240,
  // maxHeight: 300,
  // minWidth: 240,
  // minHeight: 240,
  // margin: 10,
  //},
  //[theme.breakpoints.up('lg')]: {},
}));

const InnerImage = styled(Box)(({ img }) => ({
  backgroundImage: `url(${img})`,
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

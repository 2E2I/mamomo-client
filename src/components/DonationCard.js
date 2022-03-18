import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ImageIcon from '@mui/icons-material/Image';
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
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <InnerPriceBox>{priceToString(statusPrice)}원</InnerPriceBox>
        </Grid>
        <IconGrid item xs={6}>
          <IconButton aria-label="add to favorites">
            <FavoriteIc />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIc />
          </IconButton>
          <IconButton aria-label="share">
            <ImageIc />
          </IconButton>
        </IconGrid>
      </Grid>
      <BorderLinearProgress
        variant="determinate"
        value={(statusPrice / targetPrice) * 100}
      />
    </Root>
  );
};

export default Card;

function priceToString(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

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

const Root = styled(Paper)(() => ({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: 240,
  margin: 10,
}));

const InnerImage = styled(Box)(({ img }) => ({
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '6px',
  height: '120px',
}));

const InnerTitleBox = styled(Box)(() => ({
  fontSize: 16,
  fontWeight: 500,
  fontFamily: 'Noto Sans KR',
  marginTop: 0.4,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  maxHeight: 52,
  minHeight: 52,
  marginTop: 10,
}));

const InnerOrganizationTitleBox = styled(Box)(() => ({
  direction: 'rtl',
  fontWeight: 100,
  fontFamily: 'Noto Sans KR',
  mx: 0.5,
  fontSize: 12,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
}));

const InnerPriceBox = styled(Box)(() => ({
  display: 'inline',
  fontWeight: 700,
  fontFamily: 'Noto Sans KR',
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

const ImageIc = styled(ImageIcon)(() => ({
  fontSize: 14,
}));

const IconGrid = styled(Grid)(() => ({
  direction: 'rtl',
}));

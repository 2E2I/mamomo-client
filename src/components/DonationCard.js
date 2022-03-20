import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import kakaoicon from '../assets/images/icon-kakao.png';
import ShareIcon from '@mui/icons-material/Share';
import ImageIcon from '@mui/icons-material/Image';
import DonationModal from './DonationModal';

import {
  Box,
  Grid,
  IconButton,
  styled,
  Tooltip,
  Grow,
  Menu,
  Paper,
  MenuItem,
  Typography,
  Modal,
  Backdrop,
  Fade,
  Container
} from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

const pages = ['카카오톡', '페이스북', '트위터'];

const Card = ({ campaign }) => {
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState(''); //쓸지 안쓸지 모름...
  const [organizationName, setorganizationName] = useState('');
  const [targetPrice, settargetPrice] = useState(0);
  const [statusPrice, setstatusPrice] = useState(0);
  const [url, setUrl] = useState('');
  const [siteType, setSiteType] = useState('');

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setImg(campaign !== undefined && campaign.thumbnail);
    setTitle(campaign !== undefined && campaign.title);
    setBody(campaign !== undefined && campaign.body);
    setorganizationName(campaign !== undefined && campaign.organizationName);
    settargetPrice(campaign !== undefined && campaign.targetPrice);
    setstatusPrice(campaign !== undefined && campaign.statusPrice);
    setUrl(campaign !== undefined && campaign.url);
    setSiteType(campaign !== undefined && campaign.siteType);

    return () => {};
  }, []);

  const customImgUrl = () => {
    const modifyUrEnd = String(img).substring(String(img).indexOf(')') + 1);
    const modifyUrlPre = String(img).substring(0, String(img).indexOf('('));

    const resultUrl = `${modifyUrlPre}${modifyUrEnd}`;

    return resultUrl;
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Grow in={true}>
        <Root elevation={0} onClick={handleOpen}>
          <InnerImage img={customImgUrl()} />
          <InnerTitleBox component="div">{title}</InnerTitleBox>
          <InnerOrganizationTitleBox>
            {organizationName}
          </InnerOrganizationTitleBox>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <InnerPriceBox>{priceToString(statusPrice)}원</InnerPriceBox>
            </Grid>

            <IconGrid item xs={6}>
              <IconButton aria-label="add to favorites">
                <FavoriteIc />
              </IconButton>
              <IconButton aria-label="share" onClick={handleOpenNavMenu}>
                <ShareIc />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: 'block',
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
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
      </Grow>

      <Modal
        open={open}
        onClose={handleClose}
        // hideBackdrop={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalBox>{DonationModal(img, title, body, url)}</ModalBox>
        </Fade>
      </Modal>
    </>
  );
};

export default Card;

const priceToString = (price) =>
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
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

const Root = styled(Box)(() => ({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  backgroundSize: 'cover',
  borderRadius: '6px',
  width: 300,
  height: 240,
  margin: 10,
  color: '#000',
  '&:hover': {
    cursor: 'pointer',
    backgroundSize: '300px',
  },
}));

const InnerImage = styled(Box)(({ img }) => ({
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '6px',
  height: '120px',
  backgroundSize: 'inherit',
}));

const InnerTitleBox = styled(Box)(() => ({
  fontSize: 17,
  fontWeight: 300,
  fontFamily: 'Noto Sans KR',
  marginTop: 0.4,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  maxHeight: 52,
  minHeight: 52,
  marginTop: 10,
  color: '#424242',
}));

const ModalBox = styled(Box)(() => ({
  fontSize: 16,
  fontWeight: 500,
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 700,
  backgroundColor: '#FFF',
  boxShadow: 24,
  outline: 'none',
  borderRadius: '12px',
}));

const InnerOrganizationTitleBox = styled(Box)(() => ({
  direction: 'rtl',
  fontWeight: 100,
  fontFamily: 'Noto Sans KR',
  mx: 0.5,
  fontSize: 12,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  color: '#424242',
}));

const InnerPriceBox = styled(Box)(() => ({
  display: 'inline',
  fontWeight: 700,
  fontFamily: 'Noto Sans KR',
  mx: 0.5,
  fontSize: 12,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  color: '#424242',
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



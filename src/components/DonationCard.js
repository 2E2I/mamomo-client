import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import happybean from '../assets/images/hb2.PNG';
import kakao from '../assets/images/zzo.jpg';
import goat from '../assets/images/goat_logo.png';
import cherry from '../assets/images/cherry.PNG';
import ShareIcon from '@mui/icons-material/Share';
import ImageIcon from '@mui/icons-material/Image';
import DonationModal from './DonationModal';
import { authHeader } from './authenticationFunc';
import { SignInStore } from '../store/SignInPageStore';
import { HeartCheckStore } from '../store/HeartCheckStore'; //flag개선??

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
  Container,
  Alert,
} from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import axios from 'axios';

const pages = ['카카오톡', '페이스북', '트위터'];

const Card = ({ campaign }) => {
  const [id, setId] = useState('');
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState(''); //쓸지 안쓸지 모름...
  const [organizationName, setorganizationName] = useState('');
  const [targetPrice, settargetPrice] = useState(0);
  const [statusPrice, setstatusPrice] = useState(0);
  const [url, setUrl] = useState('');
  const [isHeart, setIsHeart] = useState('');
  const [heartCount, setheartCount] = useState('');
  const [siteType, setsiteType] = useState('');

  const [logoImg, setLogoImg] = useState('');
  const [logoSize, setLogoSize] = useState('');

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { email, status, setStatus, initStatus, user, userInfo } =
    SignInStore();

  // const { setFlag } = HeartCheckStore();

  useEffect(() => {
    setId(campaign !== undefined && campaign.id);
    setImg(campaign !== undefined && campaign.thumbnail);
    setTitle(campaign !== undefined && campaign.title);
    setBody(campaign !== undefined && campaign.body);
    setorganizationName(campaign !== undefined && campaign.organizationName);
    settargetPrice(campaign !== undefined && campaign.targetPrice);
    setstatusPrice(campaign !== undefined && campaign.statusPrice);
    setUrl(campaign !== undefined && campaign.url);
    setIsHeart(campaign !== undefined && campaign.isHeart);
    setheartCount(campaign !== undefined && campaign.heartCount);
    setsiteType(campaign !== undefined && campaign.siteType);

    return () => {};
  }, [campaign]);

  useEffect(() => {
    siteTypeImg();
    return () => {};
  }, [siteType]);

  const [flag, setFlag] = useState(isHeart); //flag로직 개선 필요할듯
  const reFresh = () => {
    isHeart
      ? setheartCount((prevHeartCount) => prevHeartCount - 1)
      : setheartCount((prevHeartCount) => prevHeartCount + 1);
    setIsHeart(!isHeart);
  };
  // useEffect(() => {
  //   isHeart
  //     ? setheartCount((prevHeartCount) => prevHeartCount - 1)
  //     : setheartCount((prevHeartCount) => prevHeartCount + 1);
  //   setIsHeart(!isHeart);
  //   return () => {};
  // }, [flag]);

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

  const [userID, setUserID] = useState('');

  const c2s = async () => {
    if (window.confirm('로그인이 필요합니다. 로그인 페이지로 이동합니다.')) {
      window.location.href = '/signin';
    } else {
      // They clicked no
    }
  };

  const siteTypeImg = () => {
    
    if (siteType == 'happybean') {
      setLogoImg(happybean);
      setLogoSize('110%');
    } else if (siteType == 'kakao') {
      setLogoImg(kakao);
      setLogoSize('150%');
    } else if (siteType == 'thedirectdonation') {
      setLogoImg(goat);
      setLogoSize('95%');
    } else if (siteType == 'cherry') {
      setLogoImg(cherry);
      setLogoSize('105%');
    }
  };
  var debounce = null;
  return (
    <>
      <Root elevation={0}>
        <InnerImage img={customImgUrl()} onClick={handleOpen}>
          {/* <SiteTypeBox>{siteType}</SiteTypeBox> */}
          <SiteTypeBox
            logoImg={logoImg}
            logoSize={logoSize}
          ></SiteTypeBox>
        </InnerImage>
        <InnerTitleBox component="div" onClick={handleOpen}>
          {title}
        </InnerTitleBox>
        <InnerOrganizationTitleBox onClick={handleOpen}>
          {organizationName}
        </InnerOrganizationTitleBox>

        <Grid container spacing={1}>
          <Grid item xs={9} onClick={handleOpen}>
            <InnerPriceBox>{priceToString(statusPrice)}원</InnerPriceBox>
          </Grid>

          <IconGrid item xs={3}>
            <InnerPriceBox
              onClick={() => {
                console.log(id);
                console.log(isHeart);
                console.log(siteType);
              }}
            >
              {heartCount}
            </InnerPriceBox>
            <IconButton
              aria-label="add to favorites"
              onClick={() => {
                const a = async () => {
                  // debounce
                  clearTimeout(debounce);
                  debounce = await setTimeout(() => {
                    console.log(
                      'debounce',
                      new Date().getTime(),
                    );
                    console.log(id); // 사용자 닉네임
                    console.log(userInfo.id);
                    isHeart
                    ? axios
                        .delete(`http://localhost:8080/api/heart`, {
                          headers: authHeader(),
                          data: {
                            campaignId: `${id}`,
                            userId: userInfo.id,
                          },
                        })
                        .then( reFresh)
                        .catch((error) => {
                          alert('down' + error);
                        })
                    : axios
                        .post(
                          `http://localhost:8080/api/heart`,
                          {
                            campaignId: `${id}`,
                            userId: userInfo.id,
                          },
                          {
                            headers: authHeader(),
                          },
                        )
                        .then(reFresh)
                        .catch((error) => {
                          // console.log(error.message);
                          // console.log(error.response.status);
                          // error.response.status == 409 &&
                          //   alert('이미 좋아요를 눌렀습니다.');
                          alert('up' + error);
                        });
                  }, 500);

                };
                status == false && c2s();
                status == true && a();
              }}
            >
              <FavoriteIc icColor={isHeart === true ? '#e91e63' : '#bdbdbd'} />
            </IconButton>

            {/* <IconButton aria-label="share" onClick={handleOpenNavMenu}>
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
              </IconButton> */}
          </IconGrid>
        </Grid>
        <BorderLinearProgress
          variant="determinate"
          value={(statusPrice / targetPrice) * 100}
        />
      </Root>

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
          <ModalBox>
            {DonationModal(img, title, body, url, siteType, id)}
          </ModalBox>
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
  width: 230,
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
  padding: 5,
  direction: 'rtl',
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
  maxWidth: 600,
  maxHeight: 700,
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

const FavoriteIc = styled(FavoriteIcon)(({ icColor }) => ({
  fontSize: 15,
  color: icColor,
}));

const ImageIc = styled(ImageIcon)(() => ({
  fontSize: 14,
}));

const IconGrid = styled(Grid)(() => ({
  direction: 'rtl',
}));

const SiteTypeBox = styled(Box)(
  ({ logoImg, logoSize }) => ({
    // width: 80,
    // height: 15,
    // backgroundImage: `url(${goat})`,
    // backgroundSize: 'cover',
    // width: 80,
    // height: 18,
    // backgroundImage: `url(${kakao})`,
    // backgroundSize: '150%',
    width: 80,
    height: 20,
    backgroundImage: `url(${logoImg})`,
    backgroundSize: logoSize,
    backgroundRepeat: 'no-repeat',
    fontWeight: 400,
    fontFamily: 'Noto Sans KR',
    mx: 0.5,
    fontSize: 10,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    color: '#fafafa',
    backgroundColor: '#fff',
    borderRadius: 2,
    textAlign: 'center',
    // backgroundSize: 'cover',
    backgroundPosition: 'center',
  }),
);

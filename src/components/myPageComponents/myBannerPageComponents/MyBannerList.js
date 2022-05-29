import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Modal,
  styled,
  IconButton,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  ButtonGroup,
  Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCutIcon from '@mui/icons-material/ContentCut';

import axios from 'axios';

import { authHeader } from '../../authenticationFunc';
import { SignInStore } from '../../../store/SignInPageStore';
import { BannerPageStore } from '../../../store/BannerPageStore';
import { useHistory } from 'react-router-dom';

const MyBannerList = () => {

  const { email } = SignInStore();
  const {
    imgData,
    setSiteType,
    setTitle,
    setInfo,
    setImgData,
    setBgColor1,
    setBgColor2,
    setTextColor1,
    setTextColor2,
    setTextColor3,
    setTextFont1,
    setTextFont2,
    setTextFont3,
    setWid,
    setHei,
    setUrl,
  } = BannerPageStore();

  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [bannerList, setBannerList] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [bannerId, setBannerId] = useState('');
  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  }
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  }

  // const [campaignId, setCampaignId] = useState('');
  // const [campaignImg, setCampaignImg] = useState('');

  // function searchCampaign(campaignId) {
  //   axios
  //     .get(`http://localhost:8080/api/campaign/${campaignId}`)
  //     .then((result) => {
  //       console.log('연결');
  //       console.log(result.data.thumbnail);
  //       setCampaignImg(result.data.thumbnail);
  //     })
  // }

  function deleteBanner(bannerId) {
    axios
      .delete(
        `http://localhost:8080/api/banner/${email}/${bannerId}`, {
          headers: authHeader()
        }
      )
      .then((result) => {
        console.log('연결');
        console.log(result.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/banner/${email}`, {
          headers: authHeader()
        }
      )
      .then((result) => {
        console.log('연결');
        console.log(result.data.bannerList.content);
        setBannerList(result.data.bannerList.content);
      })
      .catch((error) => {
        console.log(error);
        console.log('연결실패');
      });

    return () => {};
  }, [email]);

  return (
    <Box
      sx={{
        marginLeft: '5px',
        width: 'full',
        height: 1000
      }}
    >
      <ImageList variant="masonry" cols={1} gap={5}>
        {bannerList.map((item) => (
          <ImageListItem key={item.img}>
            <ButtonGroup>
              <Tooltip title="편집" placement="top" arrow>
                <IconButton
                  sx={{
                    marginLeft: '670px'
                  }}
                >
                  <ContentCutIcon
                    sx={{
                      fontSize: '20px'
                    }}
                    onClick={() => {
                      // searchCampaign(item.id);
                      setSiteType(item.siteType)
                      setTitle(item.title)
                      setInfo(item.info)
                      // setImgData(campaignImg)
                      setBgColor1(item.bgColor1)
                      setBgColor2(item.bgColor2)
                      setTextColor1(item.textColor1)
                      setTextColor2(item.textColor2)
                      setTextColor3(item.textColor3)
                      setTextFont1(item.textFont1)
                      setTextFont2(item.textFont2)
                      setTextFont3(item.textFont3)
                      setWid(item.width)
                      setHei(item.height)
                      setUrl('')
                      console.log(item.img);
                      history.push('/banner')
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="삭제" placement="top" arrow>
                <IconButton>
                  <DeleteIcon
                    sx={{
                      fontSize: '24px'
                    }}
                    onClick={() => {
                      setBannerId(item.bannerId);
                      handleDeleteOpen();
                    }}
                  />
                </IconButton>
              </Tooltip>
            </ButtonGroup>
            <Dialog
              open={deleteOpen}
              onClose={handleDeleteClose}
            >
              <DialogContent>
                <DialogContentText>
                  배너를 삭제하시겠습니까?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleDeleteClose}>취소</Button>
                <Button onClick={() => {
                    deleteBanner(bannerId)
                    handleDeleteClose()
                  }}
                  autoFocus
                >
                  삭제
                </Button>
              </DialogActions>
            </Dialog>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onClick={() => {
                handleOpen();
                setModalImg(item.img);
              }}
              style={{ borderRadius: '10px' }}
            />
            <ImageListItemBar position="below" />
          </ImageListItem>
        ))}
      </ImageList>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>
          <Box
            sx={{
              fontSize: 24,
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              width: 1200,
              height: 500,
              backgroundImage: `url(${modalImg})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              color: '#FFFAFA',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </ModalBox>
      </Modal>
    </Box>
  );
};

export default MyBannerList;

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
  backgroundColor: '#FFF',
  boxShadow: 24,
  outline: 'none',
  borderRadius: '12px',
}));
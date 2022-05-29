import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Modal, styled } from '@mui/material';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import sq1 from '../../assets/images/ex1.jpg';
import sq2 from '../../assets/images/cat.jpg';
import ex1 from '../../assets/images/earth.PNG';
import ex2 from '../../assets/images/fire.PNG';
import i from '../../assets/images/i.jpg';
import ex3 from '../../assets/images/ex5.jpg';
import ex4 from '../../assets/images/ex4.jpg';
import ex5 from '../../assets/images/1.PNG';
import ex6 from '../../assets/images/2.PNG';
import ex7 from '../../assets/images/3.PNG';
import ex8 from '../../assets/images/earth.PNG';
import ex9 from '../../assets/images/sak.jpg';
import ex10 from '../../assets/images/spb.jpg';
// import ex11 from '../../assets/images/l1.png';
// import ex12 from '../../assets/images/l2.png';
// import ex13 from '../../assets/images/l3.png';
// import ex14 from '../../assets/images/l4.png';
// import ex15 from '../../assets/images/l5.png';
// import ex16 from '../../assets/images/l6.png';

import { useEffect } from 'react';
import axios from 'axios';

const MasonryImageList = () => {
  const [open, setOpen] = React.useState(false);
  const [modalImg, setModalImg] = React.useState('');
  const [bannerList, setBannerList] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const get = async () => {
      const res = await axios
        .get(`http://localhost:8080/api/banner`)
        .then(console.log('완료'))
        .catch((error) => {
          console.log('실패' + error);
        });
      console.log(res.data.bannerList.content);
      setBannerList(res.data.bannerList.content);
    };
    get()
    return () => {};
  }, []);

  return (
    <Box sx={{ width: 'full', height: 1000 }}>
      <ImageList variant="masonry" cols={2} gap={20}>
        {bannerList.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onClick={() => {
                handleOpen();
                setModalImg(item.img);
              }}
              style={{ borderRadius: '16px' }}
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
          >
            {/* <img src={`${modalImg}w=248&fit=crop&auto=format`}></img> */}
          </Box>
        </ModalBox>
      </Modal>
    </Box>
  );
};

export default MasonryImageList;

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
  //   width: 600,
  //   height: 700,
  //   maxHeight: 600,
  //   maxWidth: 1400,
  backgroundColor: '#FFF',
  boxShadow: 24,
  outline: 'none',
  borderRadius: '12px',
}));

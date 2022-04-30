import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Modal, styled} from '@mui/material';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import sq1 from '../../assets/images/ex1.jpg';
import sq2 from '../../assets/images/cat.jpg';
import ex1 from '../../assets/images/earth.PNG';
import ex2 from '../../assets/images/fire.PNG';
import i from '../../assets/images/i.jpg';
import i2 from '../../assets/images/ex5.jpg';
import ex4 from '../../assets/images/ex4.jpg';
import ex5 from '../../assets/images/1.PNG';
import ex6 from '../../assets/images/2.PNG';
import ex7 from '../../assets/images/3.PNG';
import ex8 from '../../assets/images/earth.PNG';
import ex9 from '../../assets/images/sak.jpg';
import ex10 from '../../assets/images/spb.jpg';

const MasonryImageList = () => {
  const [open, setOpen] = React.useState(false);
  const [modalImg, setModalImg] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ width: 'full', height: 1000 }}>
      <ImageList
        variant="masonry"
        cols={2}
        gap={20}
      >
        {itemData.map((item) => (
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

const itemData = [
  { img: sq1, author: 'Ben Kolde' },
  { img: sq2, author: 'Ben Kolde' },
  { img: ex1, author: 'Ben Kolde' },
  { img: ex2, author: 'Ben Kolde' },
  { img: i, author: 'Ben Kolde' },
  { img: i2, author: 'Ben Kolde' },
  { img: ex4, author: 'Ben Kolde' },
  { img: ex5, author: 'Ben Kolde' },
  { img: ex6, author: 'Ben Kolde' },
  { img: ex7, author: 'Ben Kolde' },
  { img: i, author: 'Ben Kolde' },
  { img: i2, author: 'Ben Kolde' },
  { img: ex4, author: 'Ben Kolde' },
  { img: ex5, author: 'Ben Kolde' },
  { img: ex10, author: 'Ben Kolde' },
  { img: ex10, author: 'Ben Kolde' },
  { img: ex10, author: 'Ben Kolde' },
];

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
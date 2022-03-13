import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Typography } from '@mui/material';
import sq1 from '../assets/images/ex1.jpg';
import sq2 from '../assets/images/cat.jpg';
import ex1 from '../assets/images/earth.PNG';
import ex2 from '../assets/images/fire.PNG';
import { styled } from '@mui/system';

const MainCarousel = (props) => {
  var items = [
    {
      name: '불이야',
      description: '이제 니 인생 살어',
      img: ex2,
    },
    {
      name: '불이야',
      description: 'ㅇ~~~~~',
      img: ex1,
    },
    {
      name: '임시',
      description: '~~~~',
      img: sq1,
    },
    {
      name: '난 가끔 눈물을 흘린다',
      description:
        '난... ㄱ ㅏ끔... 눈물을 흘린 ㄷ ㅏ .... ㄱ ㅏ끔은 눈물을 참을 수 없는 내가 별루ㄷ ㅏ... 맘이 ㅇ ㅏ ㅍ ㅏ 서.... 소ㄹ ㅣ치며... 울 수 있 ㄷㅏ는건.... 좋은ㄱ ㅓ ㅇ ㅑ..... ㅁ ㅓ... 꼭 슬 ㅍ ㅓ ㅇ ㅑ만 우는 건 ㅇ ㅏ니잖 ㅇ ㅏ...^^ 난... 눈물ㅇ ㅣ ....좋다..... ㅇ ㅏ니... 머 리가 ㅇ ㅏ닌..... 맘으로.....우는 ㄴ ㅐㄱ ㅏ 좋ㄷ ㅏ.....',
      img: sq2,
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const img = props.item.img;
  return (
    <Root img={img}>
      {/* <Box
        justifyContent="center"
        alignItems="center"
        sx={{
          width: { xs: 240, sm: 300 },
          height: { xs: 160, md: 300 },
          overflow: 'hidden',
          ml: { xs: 0, sm: 50, md: 80 },
          mr: { xs: 0, sm: 4, md: 0 },
        }}
      >
        <Box
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: { sm: 24, md: 30 },
            fontWeight: 'bold',
            maxHeight: 42,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          {props.item.name}
        </Box>
        <Box
          sx={{
            fontSize: { xs: 12, sm: 14, md: 15 },
            fontWeight: 'bold',
            mt: { xs: 3, md: 6 },
            maxHeight: 42,
          }}
        >
          {props.item.description}
        </Box>
      </Box> */}
    </Root>
  );
}

export default MainCarousel;

const Root = styled(Box)(({ theme, img }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  width: '100%',
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  height: '420px',
  
//반응형
//   [theme.breakpoints.down('sm')]: {
//     height: 220,
//   },
//   [theme.breakpoints.up('sm')]: {
//     height: 300,
//   },
//   [theme.breakpoints.up('lg')]: {
//     height: 420,
//   },

}));

const Root2 = styled(Typography)(({ theme }) => ({
  component: 'div',
  variant: 'h1',
}));
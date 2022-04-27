import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Typography } from '@mui/material';
import sq1 from '../../assets/images/ex1.jpg';
import sq2 from '../../assets/images/cat.jpg';
import ex1 from '../../assets/images/earth.PNG';
import ex2 from '../../assets/images/fire.PNG';
import i from '../../assets/images/i.jpg';
import i2 from '../../assets/images/ex5.jpg';
import ex4 from '../../assets/images/ex4.jpg';
import { styled } from '@mui/system';

const MainCarousel = (props) => {
  var items = [
    {
      name: '',
      description: '',
      img: ex4,
    },
    {
      name: '',
      description: '',
      img: i2,
    },
    {
      name: '',
      description: '',
      img: i,
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
  height: '320px',
  borderRadius: '12px'
}));

const Root2 = styled(Typography)(({ theme }) => ({
  component: 'div',
  variant: 'h1',
}));
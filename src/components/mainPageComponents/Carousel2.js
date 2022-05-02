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
import ex9 from '../../assets/images/ex9.jpg';
import { styled } from '@mui/system';

const MainCarousel = (props) => {
  var items = [
    {
      name: '',
      description: '',
      img: ex9,
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
      name: '',
      description: '',
      img: ex4,
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
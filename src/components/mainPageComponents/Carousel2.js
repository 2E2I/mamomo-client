import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Typography } from '@mui/material';
import sq1 from '../../assets/images/ex1.jpg';
import sq2 from '../../assets/images/cat.jpg';
import ex1 from '../../assets/images/earth.PNG';
import ex2 from '../../assets/images/fire.PNG';
import i from '../../assets/images/i.jpg';
import i2 from '../../assets/images/fi.png';
import ex4 from '../../assets/images/ex4.jpg';
import ex9 from '../../assets/images/ex9.jpg';
import a from '../../assets/images/a.png';
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
      img: a,
    },
    {
      name: '',
      description: '',
      img: ex4,
    },
  ];

  return (
    <Box sx={{ boxShadow: 24, width: '95%', height: '300px', borderRadius: 8 }}>
      <Carousel
        indicatorContainerProps={{
          style: {
            marginTop: '0', // 5
            textAlign: 'left', // 4
          },
          indicators: {
            width: '100%',
            marginTop: '10px',
            textAlign: 'center',
          },
          indicator: {
            cursor: 'pointer',
            transition: '200ms',
            padding: 0,
            color: '#afafaf',
            '&:hover': {
              color: '#1f1f1f',
            },
            '&:active': {
              color: '#1f1f1f',
            },
          },
          indicatorIcon: {
            fontSize: '15px',
          },
          // Applies to the active indicator
          active: {
            color: '#494949',
          },
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
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
  height: '300px',
  boxShadow: 24,
  borderRadius: 8,
}));

const Root2 = styled(Typography)(({ theme }) => ({
  component: 'div',
  variant: 'h1',
}));
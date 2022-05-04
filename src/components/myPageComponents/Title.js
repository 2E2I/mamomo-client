import React from 'react';
import {
  Grid,
  Divider,
} from '@mui/material';

import { MyPageStore } from '../../store/MyPageStore';

const Title = () => {

  const { title } = MyPageStore();

  return (
    <Grid>
      <Grid
        // border={1}
        sx={{
          m: '50px 0 20px 50px',
          width: 700,
          fontSize: '20px',
          fontFamily: 'Noto Sans KR',
        }}
      >
        {title}
      </Grid>
      <Divider
        sx={{
          m: '20px 0 20px 50px',
        }}
      >
      </Divider>
    </Grid>

  )
}

export default Title;
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
        sx={{
          m: "50px 0 20px 50px",
          fontSize: "24px",
          fontFamily: "Noto Sans KR",
          fontWeight: 500,
          //border: 1
        }}
      >
        {title}
      </Grid>
      <Divider
        sx={{
          m: "20px 0 20px 50px",
          width: "740px",
        }}
      >
      </Divider>
    </Grid>

  )
}

export default Title;
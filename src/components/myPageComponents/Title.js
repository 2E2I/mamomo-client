import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  TextField,
  createTheme,
  ThemeProvider,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

import axios from 'axios';

import { SignInStore } from '../../store/SignInPageStore';
import { MyPageStore } from '../../store/MyPageStore';
import { authHeader } from '../authenticationFunc';
import { fontFamily } from '@mui/system';

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
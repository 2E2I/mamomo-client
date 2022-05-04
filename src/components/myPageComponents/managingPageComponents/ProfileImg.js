import React, { useEffect, useState } from 'react';
import {
  Grid,
  Box,
  createTheme,
  ThemeProvider,
  Badge,
  Avatar,
  styled,
} from '@mui/material';

import CameraAltIcon from '@mui/icons-material/CameraAlt';

import axios from 'axios';

import { SignInStore } from '../../../store/SignInPageStore';
import { authHeader } from '../../authenticationFunc';

// 프로필 이미지
const ProfileImg = () => {
  const theme = createTheme({
    palette: {
      gray: {
        main: "#cecece",
        contrastText: "#fff",
      },

      lightGray: {
        main: "#a8a8a8"
      },

      green: {
        main: "#2db400"
      }
    },
  });

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: "40px",
    height: "40px",
    border: `1px solid #000000`,
  }));

  return (
    <ThemeProvider theme={theme}>
        <Grid container justifyContent="center">
          <Box
            sx={{
              m: "50px 0 30px 0",
              //border: 1
            }}
          >
          <Badge
            overlap="circular"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            badgeContent={
              <SmallAvatar
                sx={{
                  color: "#000000",
                  bgcolor: "#ffffff"
                }}
              >
                <CameraAltIcon />
              </SmallAvatar>
            }
            >
            <Avatar
              // alt="Travis Howard"
              // src="/static/images/avatar/2.jpg"
              sx={{
                width: "120px",
                height: "120px"
              }}
            />
          </Badge>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}

export default ProfileImg;
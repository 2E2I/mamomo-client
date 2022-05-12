import React, { useState, useEffect, useRef } from 'react';
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

import { UserProfileStore } from '../../../store/UserProfileStore';
import { ModifyProfileStore } from '../../../store/ModifyProfileStore';

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

  const { img } = UserProfileStore();
  const { mImg, setMImg } = ModifyProfileStore();

  const fileInput = useRef(null);

  const onChange = (e) => {
    if (e.target.files[0]) {
      setMImg(e.target.files[0]);
    } else {
      setMImg(mImg)
      return
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setMImg(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])

    // const formData = new FormData();
    // formData.append('profileImg', reader.result);
    // setMImg(formData);
  }

  useEffect(() => {
    setMImg(img);
  }, [img, setMImg])

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
                onClick={() => { fileInput.current.click() }}
              >
                <CameraAltIcon />
              </SmallAvatar>
            }
            >
            <Avatar
              src={mImg}
              sx={{
                width: "150px",
                height: "150px",
              }}
            />
            <input
              type='file'
              style={{ display: 'none' }}
              accept='image/jpg,impge/png,image/jpeg' 
              name='profile_img'
              onChange={onChange}
              ref={fileInput}
            />
          </Badge>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}

export default ProfileImg;
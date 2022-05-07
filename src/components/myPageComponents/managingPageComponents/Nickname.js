import React, { useEffect, useState } from 'react';
import {
  Grid,
  Box,
  TextField,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import axios from 'axios';

import { authHeader } from '../../authenticationFunc';
import { UserProfileStore } from '../../../store/UserProfileStore';
import { ModifyProfileStore } from '../../../store/ModifyProfileStore';

// 닉네임 입력란
const Nickname = () => {
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

  const { nickname } = UserProfileStore();
  const { mNickname, setMNickname } = ModifyProfileStore();

  const isNickname = (nickname) => {
    const nicknameRegex = RegExp("^[가-힣ㄱ-ㅎa-zA-Z0-9._-]{2,10}\$")

    return nicknameRegex.test(nickname);
  };

  useEffect(() => {
    setMNickname(nickname);
  }, [nickname, setMNickname])

  return (
    <ThemeProvider theme={theme}>
        <Grid container justifyContent="center">
          <Box
            component="form"
            sx={{
              m: "30px 0 0 50px",
              width: "700px",
              //border: 1
            }}
          >
            <Box
              sx={{
                fontSize: "15px",
                fontFamily: "Noto Sans KR",
                fontWeight: 500,
                //border: 1
              }}
            >
              <Box component="span" sx={{ color: "#ff0000" }}>*</Box> 닉네임
            </Box>
            <TextField
              value={mNickname}
              variant="standard"
              placeholder="특수문자, 공백 제외 2~10자"
              color="gray"
              sx={{
                m: "20px 0 0 0",
                width: "700px"
              }}
              onChange={ (e) => {
                setMNickname(e.target.value)
                console.log(mNickname);
              }}
            >
            </TextField>
          </Box>
          {
            isNickname(mNickname) === true ?
            (
              <CheckCircleIcon
                sx={{
                  m: "70px 0 0 10px",
                  color: "#2db400",
                }}
              />
            ) : (
              <CheckCircleIcon
                sx={{
                  m: "70px 0 0 10px",
                  color: "#a8a8a8",
                }}
              />
            )
          }
        </Grid>
    </ThemeProvider>
  );
}

export default Nickname;
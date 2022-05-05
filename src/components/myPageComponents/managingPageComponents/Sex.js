import React, { useEffect, useState } from 'react';
import {
  Grid,
  Box,
  createTheme,
  ThemeProvider,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
} from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import axios from 'axios';

import { authHeader } from '../../authenticationFunc';
import { SignInStore } from '../../../store/SignInPageStore';
import { UserProfileStore } from '../../../store/UserProfileStore';

// 성별 선택
const Sex = () => {
  const theme = createTheme({
    palette: {
      darkGray: {
        main: "#666666"
      },
      gray: {
        main: "#cecece",
        contrastText: "#fff",
      },
      pink: {
        main: "#FEBCBC",
      }
    },
  });

  const { sex, setSex } = UserProfileStore();

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
        <Box
          sx={{
            m: "50px 0 0 50px",
            width: "700px",
            //border: 1
          }}
        >
          <FormControl>
            <FormLabel
              sx={{
                color: "#000000",
                fontSize: "15px",
                fontFamily: 'Noto Sans KR',
                fontWeight: 500
              }}
            >
              <Box component="span" sx={{ color: "#ff0000" }}>*</Box> 성별
            </FormLabel>
              <RadioGroup
                row
                sx={{
                  m: "20px 0 0 0"
                }}
              >
                <FormControlLabel
                  value="M"
                  control={<Radio color='pink'/>}
                  label="남성"
                  checked={sex === "M"? true : false}
                  onClick={ (e) => {
                    setSex(e.target.value);
                  }}
                />
                <FormControlLabel
                  value="F"
                  control={<Radio color='pink'/>}
                  label="여성"
                  checked={sex === "F"? true : false}
                  onClick={ (e) => {
                    setSex(e.target.value);
                  }}
                />
            </RadioGroup>
          </FormControl>
          <Divider />
        </Box>
        {
          sex === "" ?
          (
            <CheckCircleIcon
              sx={{
                m: "100px 0 0 10px",
                color: "#a8a8a8",
              }}
            />
          ) : (
            <CheckCircleIcon
              sx={{
                m: "100px 0 0 10px",
                color: "#2db400",
              }}
            />
          )
        }

      </Grid>
    </ThemeProvider>
  )
}

export default Sex;
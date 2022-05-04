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
} from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { SignUpStore } from '../../../store/SignUpPageStore';
import axios from 'axios';
import { authHeader } from '../../authenticationFunc';
import { SignInStore } from '../../../store/SignInPageStore';


// 성별 선택
const Sex = () => {
  const theme = createTheme({
    palette: {
      darkGray: {
        main: '#666666'
      },
      gray: {
        main: '#cecece',
        contrastText: '#fff',
      },
      pink: {
        main: '#FEBCBC',
      }
    },
  });

  const { email } = SignInStore();
  const { sex, setSex } = SignUpStore();

  const [userSex, setUserSex] = useState('');


  useEffect(() => {
    axios
    .get(
      `http://localhost:8080/api/user/${email}`, {
        headers: authHeader()
      }
    )
    .then((res) => {
      setSex(res.data.user.sex);
      console.log('연결');
      console.log(res.data.user.sex); // 사용자 성별
    })
    .catch((e) => {
      console.log(e);
    })
  }, [email, setSex]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
        <Box
          sx={{
            width: "650px",
          }}
        >
          <FormControl
            sx={{
              margin: "30px 0 0 0",
              width: "620px",
            }}
          >
            <FormLabel
              sx={{
                color: "#000000",
                fontSize: "15px",
                fontFamily: 'Noto Sans KR',
              }}
            >
              성별
            </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
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
          {
            sex === "" ?
            (
              <CheckCircleIcon
                sx={{
                  m: "60px 0 0 0px",
                  color: "#a8a8a8",
                }}
              />
            ) : (
              <CheckCircleIcon
                sx={{
                  m: "60px 0 0 0px",
                  color: "#2db400",
                }}
              />
            )
          }
        </Box>
      </Grid>
    </ThemeProvider>
  )
}

export default Sex;
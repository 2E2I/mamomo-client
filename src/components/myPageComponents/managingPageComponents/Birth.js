import React, { useState, useEffect } from 'react';
import {
  Grid,
  createTheme,
  ThemeProvider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import axios from 'axios';

import { authHeader } from '../../authenticationFunc';
import { SignInStore } from '../../../store/SignInPageStore';

// 생년월일
const Birth = () => {
  const theme = createTheme({
    palette: {
      gray: {
        main: '#cecece',
        contrastText: '#fff',
      },
      pink: {
        main: '#FEBCBC',
      },
    },
  });

  const [userBirth, setUserBirth] = useState('');

  const { email } = SignInStore();
  const [ birth, setBirth ] = useState('');

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  var nowDate = new Date();
  var nowYear = nowDate.getFullYear();

  var yyyy = [];
  var mm = [];
  var dd = [];

  useEffect(() => {
    setBirthDay(year, month, day);
    return () => {};
  }, [year, month, day, birth]);


  for (var i = nowYear; i >= 1900; i--) {
    yyyy.push(i);
  }
  
  for (var i = 1; i <= 12; i ++) {
    mm.push(i);
  }

  for (var i = 1; i <= 31; i++) {
    dd.push(i);
  }

  function setBirthDay(year, month, day){
    console.log('year'+year);
    var m, d = "";
    
    if (month < 10) {
      m = `0${month}`;
      if (day < 10) {
        d = `0${day}`;
      }
      else {
        d = day;
      }
    }
    else {
      m = month;
      if (day < 10) {
        d = `0${day}`;
      }
      else {
        d = day;
      }
    }      
    
    setBirth(`${year}-${m}-${d}`);
    console.log(birth);
  }

  useEffect(() => {
    axios
    .get(
      `http://localhost:8080/api/user/${email}`, {
        headers: authHeader()
      }
    )
    .then((res) => {
      setUserBirth(res.data.user.birth);
      setYear(userBirth.substring(0, 4));
      setMonth(userBirth.substring(6, 7));
      setDay(userBirth.substring(8,10));
      console.log('연결');
      console.log(res.data.user.birth); // 사용자 생일
    })
    .catch((e) => {
      console.log(e);
    })
  }, [email, userBirth]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
        <Box
          sx={{
            m: "50px 0 0 50px",
            width: "700px",
            //border: 1,
          }}
        >
          <Box
            sx={{
              width: "620px",
            }}
          >
            <Box
              component="span"
              sx={{
                width: "400px",
                fontSize: "15px",
                fontFamily: "Noto Sans KR",
                fontWeight: 500
              }}
            >
              <Box component="span" sx={{ color: "#ff0000" }}>*</Box> 생년월일
            </Box>
          </Box>

          <FormControl
            variant="standard"
            sx={{
              margin: "20px 15px 0 0",
              width: "120px",
            }}
          >
            {/* 년도 선택 */}
            <InputLabel id="year">년도</InputLabel>
            <Select
              labelId="year"
              id="year"
              value={year}
              onChange={ (e) => {
                // const a = async () => {
                //   await setYear(e.target.value);
                //   await year != '' && console.log('e.year' + year);
                //   await setBirthDay(year, month, day);
                // };
                // a();
                setYear(e.target.value);
                // console.log('e.year'+ e.target.value);
                // year!=''&& console.log('e.year'+ year);
                // setBirthDay(year, month, day);
              }}
              label="년도"
            >
              {
                yyyy.map(
                  (year) => {
                    return (
                      <MenuItem
                        value={year}
                      >
                        {year}
                      </MenuItem>
                    )
                  }
                )
              }
            </Select>
          </FormControl>

          {/* 월 선택 */}
          <FormControl
            variant="standard"
            sx={{
              margin: "20px 15px 0 0",
              width: "80px",
            }}
          >
            <InputLabel id="month">월</InputLabel>
            <Select
              labelId="month"
              id="month"
              value={month}
              onChange={ (e) => {
                setMonth(e.target.value);
                // setBirthDay(year, month, day);
              }}
              label="월"
            >
              {
                mm.map(
                  (mm) => {
                    return (
                      <MenuItem
                        value={mm}
                      >
                        {mm}
                      </MenuItem>
                    )
                  }
                )
              }
            </Select>
          </FormControl>

          {/* 일 선택 */}
          <FormControl
            variant="standard"
            sx={{
              margin: "20px 10px 0 0",
              width: "80px",
            }}
          >
            <InputLabel id="day">일</InputLabel>
            <Select
              labelId="day"
              id="day"
              value={day}
              onChange={ (e) => {
                setDay(e.target.value);
                // setBirthDay(year, month, day);
              }}
              label="일"
            >
              {
                dd.map(
                  (day) => {
                    return (
                      <MenuItem
                        value={day}
                      >
                        {day}
                      </MenuItem>
                    )
                  }
                )
              }
            </Select>
          </FormControl>
        </Box>
        {
            year && month && day > 0 ?
            (
              <CheckCircleIcon
                sx={{
                  m: "100px 0 0 10px",
                  color: "#2db400",
                }}
              />
            ) : (
              <CheckCircleIcon
                sx={{
                  m: "100px 0 0 10px",
                  color: "#a8a8a8",
                }}
              />
            )
          }
      </Grid>
    </ThemeProvider>
  );
}

export default Birth;
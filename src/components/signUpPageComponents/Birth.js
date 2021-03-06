import { React, useEffect } from 'react';
import {
  Grid,
  TextField,
  createTheme,
  ThemeProvider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Box,
  Button,
} from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { useState } from 'react';
import { SignUpStore } from '../../store/SignUpPageStore';

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

  const { birth, setBirth } = SignUpStore();

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  // const [lunar, setLunar] = useState(false); // 음력
  // const [leap, setLeap] = useState(false); // 윤달

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

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
        <Box
          sx={{
            width: "400px",
          }}
        >
          <Box
            sx={{
              width: "400px",
              margin: "30px 0 0 0"
            }}
          >
            <Box
              component="span"
              color="#666666"
              sx={{
                width: "400px",
                margin: "25px 0 0 0"
              }}
            >
              생년월일
            </Box>
          </Box>

          <FormControl
            variant="standard"
            sx={{
              margin: "10px 15px 0 0",
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
              margin: "10px 15px 0 0",
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
              margin: "10px 10px 0 0",
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



          {/* 음력 선택 */}
          {/* <FormControlLabel
            control={<Checkbox color='pink'/>}
            label="음력"
            variant="standard"
            sx={{
              margin: "20px 5px 0 0",
              width: "75px",
              color: "#666666",
            }}
            onChange={ (e) => {
              if (e.target.checked) {
                setLunar(false)
                console.log(lunar);
              } else {
                setLunar(true)
                console.log(lunar);
              }
            }}
          /> */}

          {/* 윤달 선택 */}
          {/* <FormControlLabel
            control={<Checkbox color='pink'/>}
            label="윤달"
            variant="standard"
            sx={{
              margin: "20px 5px 0 0",
              width: "75px",
              color: "#666666",
            }}
            onChange={ (e) => {
              if (e.target.checked) {
                setLeap(false)
                console.log(leap);
              } else {
                setLeap(true)
                console.log(leap);
              }
            }}
          /> */}
        </Box>
        {
            year && month && day > 0 ?
            (
              <CheckCircleIcon
                sx={{
                  m: "80px 0 0 10px",
                  color: "#2db400",
                }}
              />
            ) : (
              <CheckCircleIcon
                sx={{
                  m: "80px 0 0 10px",
                  color: "#a8a8a8",
                }}
              />
            )
          }
        {/* <Button onClick={()=>{console.log('year' + year, month, day);console.log('birth' + birth);}}>aaa</Button> */}
      </Grid>
    </ThemeProvider>
  );
}

export default Birth;


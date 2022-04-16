import React from 'react';
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
} from '@mui/material';
import { useState } from 'react';

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

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [lunar, setLunar] = useState(true); // 음력
  const [leap, setLeap] = useState(true); // 윤달

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
            <Box
              component="span"
              color="#c6c6c6"
              margin="0 0 0 5px"
              fontSize="14px"
              >
              (선택)
            </Box>
          </Box>
        <FormControl
          variant="standard"
          sx={{
            margin: "5px 15px 0 0",
            width: "100px",
          }}
        >
          <InputLabel id="year">년도</InputLabel>
          <Select
            labelId="year"
            id="year"
            value={year}
            onChange={ (e) => { setYear(e.target.value) } }
            label="년도"
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          variant="standard"
          sx={{
            margin: "5px 15px 0 0",
            width: "50px",
          }}
        >
          <InputLabel id="month">월</InputLabel>
          <Select
            labelId="month"
            id="month"
            value={month}
            onChange={ (e) => { setMonth(e.target.value) } }
            label="월"
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          variant="standard"
          sx={{
            margin: "5px 10px 0 0",
            width: "50px",
          }}
        >
          <InputLabel id="day">일</InputLabel>
          <Select
            labelId="day"
            id="day"
            value={day}
            onChange={ (e) => { setDay(e.target.value) } }
            label="일"
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          control={<Checkbox color='pink'/>}
          label="음력"
          variant="standard"
          sx={{
            margin: "20px 5px 0 0",
            width: "75px",
          }}
        />
        <FormControlLabel
          control={<Checkbox color='pink'/>}
          label="윤달"
          variant="standard"
          sx={{
            margin: "20px 5px 0 0",
            width: "75px",
          }}
        />
        </Box>
      </Grid>
    </ThemeProvider>
  );
}

export default Birth;


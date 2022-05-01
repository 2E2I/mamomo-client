import React from 'react';
import {
  Grid,
  createTheme,
  ThemeProvider,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { SignUpStore } from '../../store/SignUpPageStore';


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

  const { sex, setSex } = SignUpStore();

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center">
        <FormControl
          sx={{
            margin: "30px 0 0 0",
            width: "400px",
          }}
        >
          <FormLabel id="demo-row-radio-buttons-group-label" color="darkGray">성별</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="M"
                control={<Radio color='pink'/>}
                label="남성"
                onClick={ (e) => {
                  setSex(e.target.value);
                }}
              />
              <FormControlLabel
                value="F"
                control={<Radio color='pink'/>}
                label="여성"
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
                m: "60px 0 0 10px",
                color: "#a8a8a8",
              }}
            />
          ) : (
            <CheckCircleIcon
              sx={{
                m: "60px 0 0 10px",
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
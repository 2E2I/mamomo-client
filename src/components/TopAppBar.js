import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  MenuIcon,
  ThemeProvider,
  createTheme,
  Grid,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { Link, Route } from 'react-router-dom';

import SearchPage from '../pages/SearchPage/SearchPage';
import { SignInStore } from '../store/SignInPageStore';
import { authHeader, logout } from './authenticationFunc';

const pages = ['기부모아', '배너모아', '배너제작', '도움말'];
const links = ['/category', '/bannerList', '/banner', '/'];

const TopAppBar = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
        contrastText: '#000',
      },
    },
  });

  const { email, status, setStatus, initStatus } = SignInStore();
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    axios
    .get(
      `http://localhost:8080/api/user/${email}`, {
        headers: authHeader()
      }
    )
    .then((res) => {
      setNickname(res.data.user.nickname);
      console.log('연결');
      console.log(res.data.user); // 사용자 닉네임
    })
    .catch((e) => {
      console.log(e);
    })
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: 'flex',
                color: 'black',
              }}
            >
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    display: 'inline',
                    fontWeight: 300,
                    fontFamily: 'Noto Sans KR',
                    mx: 0,
                    fontSize: 24,
                    color: '#f48fb1',
                  }}
                >
                  마음을
                </Box>
                <Box
                  sx={{
                    display: 'inline',
                    fontWeight: 700,
                    fontFamily: 'Noto Sans KR',
                    mx: 0,
                    fontSize: 24,
                    color: '#f48fb1',
                  }}
                >
                  모두모아
                </Box>
              </Link>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
              }}
            >
              {pages.map((page, index) => (
                <Link to={links[index]} style={{ textDecoration: 'none' }}>
                  <Button
                    key={page}
                    sx={{
                      my: 2,
                      color: '#424242',
                      display: 'block',
                      fontWeight: 700,
                      fontFamily: 'Noto Sans KR',
                      fontSize: 16,
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>

            {status === true ? (
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                }}
              >
                <Box>
                  <Button
                    sx={{
                      mr: 1,
                      color: '#424242',
                      display: 'block',
                      fontSize: 16,
                      fontWeight: 500,
                      fontFamily: 'Noto Sans KR',
                    }}
                    onClick={() => {
                      logout();
                      initStatus();
                    }}
                  >
                    {nickname}님
                  </Button>
                </Box>
                <Box>
                  <Button
                    sx={{
                      mr: 1,
                      color: '#424242',
                      display: 'block',
                      fontSize: 16,
                      fontWeight: 500,
                      fontFamily: 'Noto Sans KR',
                    }}
                    onClick={() => {
                      logout();
                      initStatus();
                    }}
                  >
                    로그아웃
                  </Button>
                </Box>
                <Link to="/search" style={{ color: 'inherit' }}>
                  <SearchIcon sx={{ fontSize: 34, mt: 0.5 }} />
                </Link>
              </Box>
            ) : (
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                }}
              >
                <Link to="/signin" style={{ textDecoration: 'none' }}>
                  <Box>
                    <Button
                      sx={{
                        mr: 1,
                        color: '#424242',
                        display: 'block',
                        fontSize: 16,
                        fontWeight: 500,
                        fontFamily: 'Noto Sans KR',
                      }}
                      onClick={() => {
                        initStatus();
                        localStorage.removeItem('user');
                      }}
                    >
                      로그인
                    </Button>
                  </Box>
                </Link>
                <Link to="/search" style={{ color: 'inherit' }}>
                  <SearchIcon sx={{ fontSize: 34, mt: 0.5 }} />
                </Link>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default TopAppBar;

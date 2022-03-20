import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from '@mui/material';

const pages = ['기부모아', '배너제작', '도움말'];
const settings = ['내 계정', '마이페이지', '로그아웃'];

const TopAppBar = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
        contrastText: '#000',
      },
    },
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
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
              }}
            >
              {pages.map((page) => (
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
              ))}
            </Box>

            <Box>
              <Button
                sx={{
                  my: 2,
                  color: '#424242',
                  display: 'block',
                  fontSize: 16,
                  fontWeight: 500,
                  fontFamily: 'Noto Sans KR',
                }}
              >
                마이페이지
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default TopAppBar;

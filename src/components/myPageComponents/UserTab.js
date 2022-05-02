import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  TextField,
  createTheme,
  ThemeProvider,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

import axios from 'axios';

import { SignInStore } from '../../store/SignInPageStore';
import { MyPageStore } from '../../store/MyPageStore';
import { authHeader } from '../authenticationFunc';

const UserTab = () => {

  const listStyle = {
    p: '10px 0 0 0',
    width: '100%',
    bgcolor: 'background.paper',
  };

  const { email } = SignInStore();
  const [nickname, setNickname] = useState('');
  const { setTitle } = MyPageStore();

  const title = ['프로필 관리', '좋아요한 기부', '내가 만든 배너']

  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

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
      console.log(res.data.user.nickname); // 사용자 닉네임
    })
    .catch((e) => {
      console.log(e);
    })
  });

  return(
    <Grid container justifycontent='center'
      sx={{
        m: '50px 0 0 0',
        width: 200,
        height: 400,
        border: 1,
        borderColor: '#bdbdbd'
      }}
    >
      <Grid
        sx={{
          width: 200,
          bgcolor: '#fff9f9',
          borderBottom: 1,
          borderColor: '#bdbdbd'
        }}
      >
        <Grid
          container justifyContent='center'
          sx={{
            p: '30px 0 0 0',
          }}
        >
          <Avatar
            //alt='MaMoMo'
            //src='../../src/assets/images/profileImg.png'
            sx={{
              width: 120,
              height: 120,
            }}
          >
          </Avatar>
        </Grid>
        <Grid container justifyContent='center'
          sx={{
            m: '20px 0 0 0',
            fontFamily: 'Noto Sans KR',
          }}
        >
          {nickname}님
        </Grid>
      </Grid>

      <Grid container justifyContent='center' sx={{ height: 130 }}>
        <List
          sx={listStyle}
          component="nav"
        >
          <ListItem button divider
            selected={selectedIndex === 0}
            onClick={(event) => { 
              handleListItemClick(event, 0);
              setTitle(title[0])
            }}
          >
            <ListItemText>{title[0]}</ListItemText>
          </ListItem>

          <ListItem button divider
            selected={selectedIndex === 1}
            onClick={(event) => { 
              handleListItemClick(event, 1);
              setTitle(title[1])
            }}         
          >
            <ListItemText>{title[1]}</ListItemText>
          </ListItem>

          <ListItem button
            selected={selectedIndex === 2}
            onClick={(event) => { 
              handleListItemClick(event, 2);
              setTitle(title[2])
            }}          >
            <ListItemText>{title[2]}</ListItemText>
          </ListItem>
        </List>

      </Grid>

    </Grid>
  )
}

export default UserTab;
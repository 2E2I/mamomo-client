import React, { useEffect } from 'react';
import {
  Button,
} from '@mui/material';

import axios from 'axios';

import { authHeader } from '../../authenticationFunc';
import { SignInStore } from '../../../store/SignInPageStore';
import { ModifyProfileStore } from '../../../store/ModifyProfileStore';
import { UserProfileStore } from '../../../store/UserProfileStore';

// 저장 버튼
const SaveButton = () => {

  const { email } = SignInStore();
  const { mImg, mNickname, mBirthday, mSex, mFavTopics } = ModifyProfileStore();
  const { img, setImg, nickname, setNickname, birthday, setBirthday, sex, setSex, favTopics, setFavTopics } = UserProfileStore();
  
  const onClick = async () => {
    const data = await axios
      .patch(`http://localhost:8080/api/user/profile/${email}`,
        {
          nickname : mNickname,
          birth: mBirthday,
          sex: mSex,
          favTopics: mFavTopics,
        },
        {
          headers: authHeader()
        },
      )
      .then((res) => {
        console.log(res.data);
        setImg(mImg);
        setNickname(mNickname);
        setBirthday(mBirthday);
        setSex(mSex);
        setFavTopics(mFavTopics);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    setImg(img);
    setNickname(nickname);
    setBirthday(birthday);
    setSex(sex);
    setFavTopics(favTopics);
  }, [img, setImg, nickname, setNickname, birthday, setBirthday, sex, setSex, favTopics, setFavTopics]);

  return (
    <Button
      variant="contained"
      sx={{
        m: "100px 0 0 300px",
        backgroundColor: "#f27777",
        boxShadow: "0",
        ":hover": {
          backgroundColor: "#f27777",
          boxShadow: "0",
        },
        fontFamily: "Noto Sans KR",
        fontSize: "15px",
        fontWeight: 400,
      }}
      onClick={ onClick }
    >
      저장
    </Button>
  );
}

export default SaveButton;
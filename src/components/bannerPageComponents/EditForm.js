import React from 'react';
import { Box, Button, Grid, styled } from '@mui/material';
import TextField from '@mui/material/TextField';
import { BannerPageStore } from '../../store/BannerPageStore';
import { useState } from 'react';
import { useEffect } from 'react';
import { HexColorInput, HexColorPicker } from 'react-colorful';

const EditForm = () => {
  const [files, setFiles] = useState('');
  const [editColor1, setEditColor1] = useState('#FFF8F8');
  const [editColor2, setEditColor2] = useState('pink');

  const [editTextColor1, setEditTextColor1] = useState('#9ccc65');
  const [editTextColor2, setEditTextColor2] = useState('#424242');
  const [editTextColor3, setEditTextColor3] = useState('#424242');

  const [editWidth, setEditWidth] = useState('1000');
  const [editHeight, setEditHeight] = useState('200');



  const {
    siteType,
    title,
    info,
    imgData,
    BgColor1,
    BgColor2,
    wid,
    hei,
    setSiteType,
    setTitle,
    setInfo,
    setImgData,
    setBgColor1,
    setBgColor2,
    setTextColor1,
    setTextColor2,
    setTextColor3,
    setTextFont1,
    setTextFont2,
    setTextFont3,
    setWid,
    setHei,
  } = BannerPageStore();

  // useEffect(() => {
  //   setEditWidth(wid);
  //   setEditHeight(hei);
  // }, []);

  useEffect(() => {
    console.log(editColor1);
    console.log(editColor2);
    setBgColor1(editColor1);
    setBgColor2(editColor2);
    setTextColor1(editTextColor1);
    setTextColor2(editTextColor2);
    setTextColor3(editTextColor3);
    setWid(editWidth);
    setHei(editHeight);

    return () => {};
  }, [
    editColor1,
    editColor2,
    editTextColor1,
    editTextColor2,
    editTextColor3,
    editWidth,
    editHeight,
  ]);

  useEffect(() => {
    preview();

    return () => preview();
  }, [files]);


  const preview = () => {
    if (!files) return false;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => setImgData(reader.result);
    console.log('reader' + reader.result);
  };

  const handleUploadClick = (e) => {
    console.log();
    const file = e.target.files;
    console.log(file);
    setFiles(file);
    // const reader = new FileReader();
    // var url = reader.readAsDataURL(file);
    const formData = new FormData();
    formData.append('uploadImage', files[0]);
    console.log('form' + formData);
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="출처"
            multiline
            defaultValue="happybean"
            onChange={(e) => {
              setSiteType(e.target.value);
              console.log(title);
            }}
            sx={{ mb: 4 }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="폰트크기"
            defaultValue="14"
            onChange={(e) => {
              setTextFont1(e.target.value);
            }}
            sx={{ mb: 4 }}
          />
        </Grid>
        <Grid item xs={2}>
          <BoxButton>색상변경</BoxButton>
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="제목"
            multiline
            defaultValue="익산시민 희망공약제안 캠페인을 응원해주세요."
            onChange={(e) => {
              setTitle(e.target.value);
              console.log(title);
            }}
            sx={{ mb: 4 }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="폰트크기"
            defaultValue="24"
            onChange={(e) => {
              setTextFont2(e.target.value);
              console.log('f2' + e.target.value);
            }}
            sx={{ mb: 4 }}
          />
        </Grid>
        <Grid item xs={2}>
          <BoxButton>색상변경</BoxButton>
        </Grid>

        <Grid item xs={8}>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="내용"
            multiline
            rows={4}
            defaultValue="시민이 직접 공약을 제안합니다.우리 익산을 위해 필요하다고 생각하는 아이디어가 있는 시민이면 누구나 참여 가능하며, 아이디어를 구체적인 공약으로 만들어 직접 제안하는 것입니다."
            onChange={(e) => setInfo(e.target.value)}
            sx={{ mb: 4 }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="폰트크기"
            defaultValue="16"
            onChange={(e) => {
              setTextFont3(e.target.value);
            }}
            sx={{ mb: 4 }}
          />
        </Grid>
        <Grid item xs={2}>
          <BoxButton>색상변경</BoxButton>
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="url"
            multiline
            defaultValue="https://happybean.naver.com/donations/H000000183493"
          />
        </Grid>

        <Button variant="contained" component="label">
          이미지 업로드
          <input type="file" hidden onChange={handleUploadClick} />
        </Button>
      </Grid>

      <TextField
        fullWidth
        id="outlined-multiline-static"
        label="가로"
        defaultValue={wid} //해결해야해요
        onChange={(e) => {
          setEditWidth(e.target.value);
          console.log('wi' + e.target.value);
        }}
        sx={{ mb: 4 }}
      />

      <TextField
        fullWidth
        id="outlined-multiline-static"
        label="세로"
        defaultValue={editHeight}
        onChange={(e) => {
          setEditHeight(e.target.value);
          console.log('he' + e.target.value);
        }}
        sx={{ mb: 4 }}
      />

      <HexColorPicker color={editColor1} onChange={setEditColor1} />
      <HexColorInput color={editColor1} onChange={setEditColor1} />

      <HexColorPicker color={editColor2} onChange={setEditColor2} />
      <HexColorInput color={editColor2} onChange={setEditColor2} />

      <HexColorPicker color={editTextColor1} onChange={setEditTextColor1} />
      <HexColorInput color={editTextColor1} onChange={setEditTextColor1} />

      <HexColorPicker color={editTextColor2} onChange={setEditTextColor2} />
      <HexColorInput color={editTextColor2} onChange={setEditTextColor2} />

      <HexColorPicker color={editTextColor3} onChange={setEditTextColor3} />
      <HexColorInput color={editTextColor3} onChange={setEditTextColor3} />
    </div>
  );
};

export default EditForm;

const BoxButton = styled(Box)(() => ({
  fontWeight: 500,
  fontSize: 18,
  padding: 4,
  marginTop: 4,
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  borderRadius: 4,
  borderColor: '#616161',
  marginRight: 30,
  '&:hover': {
    cursor: 'pointer',
    color: '#616161',
  },
}));

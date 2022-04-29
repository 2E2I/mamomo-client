import React from 'react';
import {
  Box,
  Button,
  Grid,
  styled,
  Paper,
  InputBase,
  Container,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { BannerPageStore } from '../../store/BannerPageStore';
import { useState } from 'react';
import { useEffect } from 'react';
import { HexColorInput, HexColorPicker } from 'react-colorful';

const EditForm = () => {
  const [files, setFiles] = useState('');

  let [modal, setModal] = useState(false);

  let {
    siteType,
    title,
    info,
    imgData,
    wid,
    hei,
    BgColor1,
    BgColor2,
    textColor1,
    textColor2,
    textColor3,
    textFont1,
    textFont2,
    textFont3,
    url,
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
    setUrl,
  } = BannerPageStore();

  useEffect(() => {
    console.log({ siteType });
    console.log(title);
    console.log(info);
  }, []);

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
        <Grid item xs={1}>
          <Box
            onClick={() => {
              setModal(!modal);
            }}
            sx={{
              fontFamily: 'Noto Sans KR',
              fontSize: '18px',
              fontWeight: 400,
              mb: '10px',
              border: 2,
              backgroundColor: '#9e9e9e',
              color: '#f5f5f5',
              borderRadius: 1,
              width: 120,
              textAlign: 'center',
              '&:hover': {
                cursor: 'pointer',
                color: '#616161',
              },
            }}
          >
            색상편집
          </Box>
        </Grid>
        <Grid item xs={11} sx={{ direction: 'rtl' }}>
          <BoxButton
            variant="contained"
            component="label"
            sx={{ border: 2, borderRadius: 1, mr: 1 }}
          >
            이미지 업로드
            <input type="file" hidden onChange={handleUploadClick} />
          </BoxButton>
        </Grid>
      </Grid>
      {modal == true ? (
        <>
          <Grid
            container
            spacing={1}
            sx={{
              fontFamily: 'Noto Sans KR',
              fontSize: '14px',
              justifyContent: 'space-between',
              display: 'flex',
            }}
          >
            <Grid item xs={2.4}>
              <HexColorPicker
                color={BgColor1}
                onChange={setBgColor1}
                style={{
                  width: '160px',
                  height: '120px',
                  marginTop: '5px',
                }}
              />
              그라디언트 L:
              <HexColorInput
                color={BgColor1}
                onChange={setBgColor1}
                style={{
                  width: '50px',
                  border: 0,
                  textAlign: 'end',
                }}
              />
            </Grid>
            <Grid item xs={2.4}>
              <HexColorPicker
                color={BgColor2}
                onChange={setBgColor2}
                style={{ width: '160px', height: '120px', marginTop: '5px' }}
              />
              그라디언트 R:
              <HexColorInput
                color={BgColor2}
                onChange={setBgColor2}
                style={{ width: '50px', border: 0, textAlign: 'end' }}
              />
            </Grid>
            <Grid item xs={2.4}>
              <HexColorPicker
                color={textColor1}
                onChange={setTextColor1}
                style={{ width: '160px', height: '120px', marginTop: '5px' }}
              />
              소제목 색상:
              <HexColorInput
                color={textColor1}
                onChange={setTextColor1}
                style={{ width: '50px', border: 0, textAlign: 'end' }}
              />
            </Grid>
            <Grid item xs={2.4}>
              <HexColorPicker
                color={textColor2}
                onChange={setTextColor2}
                style={{ width: '160px', height: '120px', marginTop: '5px' }}
              />
              제목 색상:
              <HexColorInput
                color={textColor2}
                onChange={setTextColor2}
                style={{ width: '50px', border: 0, textAlign: 'end' }}
              />
            </Grid>
            <Grid item xs={2.4}>
              <HexColorPicker
                color={textColor3}
                onChange={setTextColor3}
                style={{ width: '160px', height: '120px', marginTop: '5px' }}
              />
              본문 색상:
              <HexColorInput
                color={textColor3}
                onChange={setTextColor3}
                style={{ width: '50px', border: 0, textAlign: 'end' }}
              />
            </Grid>
          </Grid>
        </>
      ) : null}
      <Grid container spacing={1} sx={{ mt: 1 }}>
        <Grid item xs={2} sx={{ display: 'flex' }}>
          <Box sx={{ mt: 0.75, fontWeight: 500 }}>가로 :&nbsp;&nbsp; </Box>
          <Paper
            component="form"
            variant="outlined"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: '100px',
              //height: '40px',
              borderColor: '#f7f7f7',
              backgroundColor: '#f7f7f7',
              boxShadow: '0',
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                fontWeight: 300,
                fontFamily: 'Noto Sans KR',
                mx: 0,
                fontSize: 14,
                color: '#212121',
              }}
              placeholder=""
              value={wid}
              onChange={(e) => {
                setWid(e.target.value);
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex' }}>
          <Box sx={{ mt: 0.75, fontWeight: 500 }}>세로 :&nbsp;&nbsp; </Box>
          <Paper
            component="form"
            variant="outlined"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: '100px',
              //height: '40px',
              borderColor: '#f7f7f7',
              backgroundColor: '#f7f7f7',
              boxShadow: '0',
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                fontWeight: 300,
                fontFamily: 'Noto Sans KR',
                mx: 0,
                fontSize: 14,
                color: '#212121',
              }}
              placeholder=""
              value={hei}
              onChange={(e) => {
                setHei(e.target.value);
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={8} sx={{ display: 'flex' }}>
          <Box sx={{ mt: 0.75, fontWeight: 500 }}>제공 :&nbsp;&nbsp; </Box>
          <Paper
            component="form"
            variant="outlined"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: '600px',
              //height: '40px',
              borderColor: '#f7f7f7',
              backgroundColor: '#f7f7f7',
              boxShadow: '0',
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                fontWeight: 300,
                fontFamily: 'Noto Sans KR',
                mx: 0,
                fontSize: 14,
                color: '#212121',
              }}
              placeholder="소제목을 입력하세요."
              value={siteType}
              onChange={(e) => {
                setSiteType(e.target.value);
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex' }}>
          <Box sx={{ mt: 0.75, fontWeight: 500 }}>폰트 크기 :&nbsp;&nbsp; </Box>
          <Paper
            component="form"
            variant="outlined"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: '40px',
              //height: '40px',
              borderColor: '#f7f7f7',
              backgroundColor: '#f7f7f7',
              boxShadow: '0',
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                fontWeight: 300,
                fontFamily: 'Noto Sans KR',
                mx: 0,
                fontSize: 14,
                color: '#212121',
              }}
              placeholder=""
              value={textFont1}
              onChange={(e) => {
                setTextFont1(e.target.value);
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          {/* <BoxButton>fontWeight</BoxButton> */}
        </Grid>
        <Grid item xs={8} sx={{ display: 'flex' }}>
          <Box sx={{ mt: 0.75, fontWeight: 500 }}>제목 :&nbsp;&nbsp; </Box>
          <Paper
            component="form"
            variant="outlined"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: '600px',
              //height: '40px',
              borderColor: '#f7f7f7',
              backgroundColor: '#f7f7f7',
              boxShadow: '0',
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                fontWeight: 300,
                fontFamily: 'Noto Sans KR',
                mx: 0,
                fontSize: 14,
                color: '#212121',
              }}
              placeholder="제목을 입력하세요."
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                console.log(title);
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex' }}>
          <Box sx={{ mt: 0.75, fontWeight: 500 }}>폰트 크기 :&nbsp;&nbsp; </Box>
          <Paper
            component="form"
            variant="outlined"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: '40px',
              //height: '40px',
              borderColor: '#f7f7f7',
              backgroundColor: '#f7f7f7',
              boxShadow: '0',
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                fontWeight: 300,
                fontFamily: 'Noto Sans KR',
                mx: 0,
                fontSize: 14,
                color: '#212121',
              }}
              placeholder=""
              value={textFont2}
              onChange={(e) => {
                setTextFont2(e.target.value);
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          {/* <BoxButton>fontWeight</BoxButton> */}
        </Grid>

        <Grid item xs={8} sx={{ display: 'flex' }}>
          <Box sx={{ mt: 0.75, fontWeight: 500 }}>본문 :&nbsp;&nbsp; </Box>
          <Paper
            component="form"
            variant="outlined"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: '600px',
              //height: '40px',
              borderColor: '#f7f7f7',
              backgroundColor: '#f7f7f7',
              boxShadow: '0',
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                fontWeight: 300,
                fontFamily: 'Noto Sans KR',
                mx: 0,
                fontSize: 14,
                color: '#212121',
              }}
              placeholder="내용을 입력하세요."
              multiline={true}
              minRows={3}
              value={info}
              onChange={(e) => {
                setInfo(e.target.value);
                console.log(info);
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex' }}>
          <Box sx={{ mt: 0.75, fontWeight: 500 }}>폰트 크기 :&nbsp;&nbsp; </Box>
          <Paper
            component="form"
            variant="outlined"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: '40px',
              height: '36px',
              borderColor: '#f7f7f7',
              backgroundColor: '#f7f7f7',
              boxShadow: '0',
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                fontWeight: 300,
                fontFamily: 'Noto Sans KR',
                mx: 0,
                fontSize: 14,
                color: '#212121',
              }}
              placeholder=""
              value={textFont3}
              onChange={(e) => {
                setTextFont3(e.target.value);
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          {/* <BoxButton>fontWeight</BoxButton> */}
        </Grid>
        <Grid item xs={8} sx={{ display: 'flex' }}>
          <Box sx={{ mt: 0.75, fontWeight: 500 }}>URL :&nbsp;&nbsp; </Box>
          <Paper
            component="form"
            variant="outlined"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: '600px',
              //height: '40px',
              borderColor: '#f7f7f7',
              backgroundColor: '#f7f7f7',
              boxShadow: '0',
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                fontWeight: 300,
                fontFamily: 'Noto Sans KR',
                mx: 0,
                fontSize: 14,
                color: '#212121',
              }}
              placeholder=""
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* <HexColorPicker color={editColor1} onChange={setEditColor1} />
      <HexColorInput color={editColor1} onChange={setEditColor1} />

      <HexColorPicker color={editColor2} onChange={setEditColor2} />
      <HexColorInput color={editColor2} onChange={setEditColor2} />

      <HexColorPicker color={editTextColor1} onChange={setEditTextColor1} />
      <HexColorInput color={editTextColor1} onChange={setEditTextColor1} />

      <HexColorPicker color={editTextColor2} onChange={setEditTextColor2} />
      <HexColorInput color={editTextColor2} onChange={setEditTextColor2} />

      <HexColorPicker color={editTextColor3} onChange={setEditTextColor3} />
      <HexColorInput color={editTextColor3} onChange={setEditTextColor3} /> */}
    </div>
  );
};

export default EditForm;

const BoxButton = styled(Box)(() => ({
  fontFamily: 'Noto Sans KR',
  fontSize: '18px',
  mb: '10px',
  backgroundColor: '#9e9e9e',
  color: '#f5f5f5',
  borderRadius: '2px',
  width: 120,
  textAlign: 'center',
  '&:hover': {
    cursor: 'pointer',
    color: '#616161',
  },
}));

const Modal = () => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
};

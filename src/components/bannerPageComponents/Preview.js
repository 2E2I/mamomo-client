import React from 'react';
import BannerDesign from './BannerDesign';
import { Box, Grid, styled } from '@mui/material';
import html2canvas from 'html2canvas';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { height } from '@mui/system';
import { BannerPageStore } from '../../store/BannerPageStore';
import { SignInStore } from '../../store/SignInPageStore';
import { authHeader } from '../authenticationFunc';
import axios from 'axios';

const Preview = () => {
  const { email, status, setStatus, initStatus, user, userInfo } =
    SignInStore();
  const [bannerW, setBannerW] = useState('1000');

  const {
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
  } = BannerPageStore();

  //aaaa
  const [imgBase64, setImgBase64] = useState(''); // 파일 base64
  const [imgFile, setImgFile] = useState(null); //파일

  const handleChangeFile = (files) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    };
    if (files) {
      reader.readAsDataURL(files); // 1. 파일을 읽어 버퍼에 저장합니다.
      setImgFile(files); // 파일 상태 업데이트
    }
  };
  //aaaa

  useEffect(() => {
    setBannerW(wid);
    return () => {};
  }, [wid]);

  const onCapture = () => {
    console.log('onCapute');
    html2canvas(document.getElementById('aa')).then(async (canvas) => {
      console.log('onCaputeMiddle');
      await saveOnServer(canvas.toDataURL('image/png'));
      await onSaveAs(canvas.toDataURL('image/png'), 'imgae-download.png');
      //document.body.appendChild(canvas)
      console.log('onCaputeEnd');
    });
  };

  const onSaveAs = (uri, filename) => {
    console.log('onSaveAs');
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
    // document.body.remove(link);
    // window.location.replace('/banner');
  };

  const onCapture2 = () => {
    console.log('onCapute');
    html2canvas(document.getElementById('aa')).then((canvas) => {
      console.log('onCaputeMiddle');
      var dataUrl = canvas.toDataURL('image/png');
      saveOnServer(dataUrl);
      //document.body.appendChild(canvas)
      console.log('onCaputeEnd');
    });
  };

  const saveOnServer = async (uri) => {
    var byteString = window.atob(uri.split(',')[1]);
    var array = [];
    // i 에 해당하는 string을 unicode로 변환
    for (var i = 0; i < byteString.length; i++) {
      array.push(byteString.charCodeAt(i));
    }
    // console.log(array)
    // (2486) [137, 80, 78, 71, ...]
    // Blob 생성
    var myBlob = new Blob([new Uint8Array(array)], { type: 'image/png' });

    // ** Blob -> File 로 변환**
    var file = new File([myBlob], 'blobtofile/png', {
      type: myBlob.type,
    });

    
    //썸네일 코드변환 (나중에 로직 수정필요할듯)
    try{
    var byteString1 = window.atob(imgData.split(',')[1]);
    var array1 = [];
    // i 에 해당하는 string을 unicode로 변환
    for (var i = 0; i < byteString1.length; i++) {
      array1.push(byteString1.charCodeAt(i));
    }
    // console.log(array)
    // (2486) [137, 80, 78, 71, ...]
    // Blob 생성
    var myBlob1 = new Blob([new Uint8Array(array1)], { type: 'image/png' });

    // ** Blob -> File 로 변환**
    var file1 = new File([myBlob1], 'blobtofile/png', {
      type: myBlob.type,
    });
  } catch {
    file1 = imgData
  }

    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);

    var dateString = year + '-' + month + '-' + day;

    var hours = ('0' + today.getHours()).slice(-2);
    var minutes = ('0' + today.getMinutes()).slice(-2);
    var seconds = ('0' + today.getSeconds()).slice(-2);

    var timeString = hours + ':' + minutes + ':' + seconds;

    console.log(`${dateString} ${timeString}`);

    // var file = new File([uri], 'blobtofile.png');
    var formData = new FormData();
    await formData.append('imgData', file);
    await formData.append('email', userInfo.email);
    await formData.append('date', `${dateString} ${timeString}`);
    await formData.append('siteType', siteType);
    await formData.append('title', title);
    await formData.append('info', info);
    await formData.append('width', wid);
    await formData.append('height', hei);
    await formData.append('bgColor1', BgColor1);
    await formData.append('bgColor2', BgColor2);
    await formData.append('textColor1', textColor1);
    await formData.append('textColor2', textColor2);
    await formData.append('textColor3', textColor3);
    await formData.append('textFont1', textFont1);
    await formData.append('textFont2', textFont2);
    await formData.append('textFont3', textFont3);
    await formData.append('url', url);
    await formData.append('originalImgData', file1);
    // await console.log({ ...authHeader() });
    // await console.log('uri:' + uri);
    // await console.log('byteString:' + byteString);
    // await console.log(array);
    // await console.log(myBlob);
    // await console.log(file);
    // await console.log('email:' + userInfo.email);
    await console.log(textFont3);
    var data;
    data = URL.createObjectURL(file);
    console.log(data);
    await axios
      .post(
        `http://localhost:8080/api/banner`,
        formData,
        // {
        //   bannerImg: file,
        //   email: userInfo.email,
        //   date: '2022-05-09 17:40:06',
        // },
        {
          headers: { ...authHeader(), 'Content-Type': 'multipart/form-data' },
        },
      )
      .then(console.log('저장완료'))
      .catch((error) => {
        console.log('실패' + error);
      });
  };


  return (
    <div>
      <Grid container spacing={1} sx={{ mb: 1 }}>
        <Grid item xs={6}>
          <TitleBox>이미지 미리보기</TitleBox>
        </Grid>
        <Grid item xs={6} sx={{ direction: 'rtl' }}>
          <CopyButton id="saveImg" sx={{ border: 2 }} onClick={onCapture}>
            저장하기
          </CopyButton>
          {/* <CopyButton id="saveImg" sx={{ border: 2 }} onClick={onCapture2}>
            서버저장
          </CopyButton> */}
        </Grid>
      </Grid>
      <div id="aa" style={{ width: `${bannerW}px` }}>
        <BannerDesign></BannerDesign>
      </div>
    </div>
  );
};

export default Preview;

const TitleBox = styled(Box)(() => ({
  fontWeight: 700,
  fontSize: 24,
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  marginLeft: '20px',
  '&:hover': {
    cursor: 'pointer',
    color: '#616161',
  },
}));

const CopyButton = styled(Box)(() => ({
  backgroundColor: '#9e9e9e',
  color: '#f5f5f5',
  fontWeight: 400,
  fontSize: 18,
  marginTop: 4,
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  borderRadius: 4,

  height: 30,
  width: 120,
  marginRight: 10,
  textAlign: 'center',
  '&:hover': {
    cursor: 'pointer',
    color: '#616161',
  },
}));

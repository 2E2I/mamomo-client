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

  const { wid } = BannerPageStore();

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
    html2canvas(document.getElementById('aa')).then((canvas) => {
      console.log('onCaputeMiddle');
      onSaveAs(canvas.toDataURL('image/png'), 'imgae-download.png');
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
    document.body.remove(link);
    window.location.replace('/banner');
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

    // var file = new File([uri], 'blobtofile.png');
    var formData = new FormData();
    await formData.append('bannerImg', file);
    await formData.append('email', userInfo.email);
    await formData.append('date', '2022-05-11 14:18:06');
    await console.log({ ...authHeader() });
    await console.log('uri:' + uri);
    await console.log('byteString:' + byteString);
    await console.log(array);
    await console.log(myBlob);
    await console.log(file);
    await console.log('email:' + userInfo.email);
    await console.log('formdata:' + formData);
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

  const convertBase64IntoFile = (image, fileName) => {
    const mimeType = image?.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0]; // image/jpeg
    const realData = image.split(',')[1]; // 이 경우에선 /9j/4AAQSkZJRgABAQAAAQABAAD...

    const blob = b64toBlob(realData, mimeType);
    var image = new Image();
    image.src = window.URL.createObjectURL(blob);
    console.log(image);

    const raw = new File([blob], fileName, { type: mimeType });

    const fileList = [{ name: raw.name, size: raw.size, uid: 1, raw }];
    return fileList;
  };

  const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
    if (b64Data === '' || b64Data === undefined) return;

    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  };

  const downloadFild = () => {
    // 서버에서 URL 을 내려주는 경우
    const downloadLocation = `${process.env.VUE_APP_ZULE_URL}/api/example/file/download_location}`;
    return window.location.assign(downloadLocation);
  };

  //  임의로 a 태그를 만들어 실행시킵니다.
  const downloadURI = (uri, name) => {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    link.remove();
  };

  return (
    <div>
      <div className="App">
        <div
          style={{
            backgroundColor: '#efefef',
            width: '150px',
            height: '150px',
          }}
        ></div>
        <div>
          <input type="file" name="imgFile" id="imgFile" />
        </div>
      </div>
      <Grid container spacing={1} sx={{ mb: 1 }}>
        <Grid item xs={6}>
          <TitleBox>이미지 미리보기</TitleBox>
        </Grid>
        <Grid item xs={6} sx={{ direction: 'rtl' }}>
          <CopyButton id="saveImg" sx={{ border: 2 }} onClick={onCapture}>
            저장하기
          </CopyButton>
          <CopyButton id="saveImg" sx={{ border: 2 }} onClick={onCapture2}>
            서버저장
          </CopyButton>
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

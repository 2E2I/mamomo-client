import React from 'react';
import BannerDesign from './BannerDesign';
import { Box, Grid, styled, TextField } from '@mui/material';

const SourceCode = () => {
  let code = `<div class="Box" style="display: flex;
            justify-content: center;
            font-family: 'Noto Sans KR', sans-serif;"
            >
    <div class="BannerBox" style="text-align: center;
            text-overflow: ellipsis;
            overflow: hidden;
            width: 100%;
            max-width: 1000px;
            display: flex;
            flex-direction: row;
            background-color: #FFF8F8;
            background-size: cover;
            background-position: center;
            height: 200px;
            border-radius: 10px;">
        <div class="InfoBox" style="text-overflow: ellipsis;
            overflow: hidden;
            width: 70%;
            height: 200px;
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
            padding-right: 30px;
            padding-left: 30px;
            font-size: 0.85px;"
            >
            <div class="SiteType" style="font-weight: 500;
            font-size: 14em;
            text-overflow: ellipsis;
            overflow: hidden;
            text-align: start;
            display: flex;
            color: #9ccc65;
            height: 30px;
            margin-top: 20px; ">happybean</div>
            <div class="Title" style="font-weight: 600;
            font-size: 24em;
            text-overflow: ellipsis;
            overflow: hidden;
            text-align: start;
            display: flex;
            color: #424242;
            max-height: 35px;
            margin-bottom: 10px; ">익산시민 희망공약제안 캠페인을 응원해주세요.</div>
            <div class="Info" style="font-weight: 300;
            font-size: 16em;
            text-overflow: ellipsis;
            overflow: hidden;
            text-align: start;
            color: #424242;
            height: 75px;
            margin-bottom: 10px;  ">시민이 직접 공약을 제안합니다.우리 익산을 위해 필요하다고 생각하는
            아이디어가 있는 시민이면 누구나 참여 가능하며, 아이디어를 구체적인
            공약으로 만들어 직접 제안하는 것입니다.</div>
            <div class="Source" style="font-weight: 200;
            font-size: 14em;
            text-overflow: ellipsis;
            overflow: hidden;
            text-align: end;
            color: #f48fb1;
            height: 35px;     ">produced.by MAMOMO</div>
        </div>
        <div class="ImgBox" style="text-overflow: ellipsis;
            overflow: hidden;
            width: 30%;
            height: 200px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-content: center;
            align-items: center;
            background-image: url(https://happybean-phinf.pstatic.net/20220310_20/1646893410554UqCEe_PNG/%ED%81%AC%EA%B8%B0%EB%B3%80%ED%99%9855555.png?type=a360);
            background-size: cover;
            background-position: center;
            border-radius: 10px;"></div>
    </div>
</div>`;

  return (
    <div>
      <Grid container spacing={1} sx={{ mb: 1 }}>
        <Grid item xs={6}>
          <TitleBox>소스코드</TitleBox>
        </Grid>
        <Grid item xs={6}>
          <GridBox>
            <CopyButton sx={{ border: 1.5 }}>복사하기</CopyButton>
          </GridBox>
        </Grid>
      </Grid>
      <CodeBox>
        <TextField
          fullWidth
          label="코드"
          id="fullWidth"
          value={`${code}`}
          multiline={true}
          rows={10}       
        />
      </CodeBox>
    </div>
  );
};

export default SourceCode;

const GridBox = styled(Box)(() => ({
  direction: 'rtl',
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
}));

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
  fontWeight: 500,
  fontSize: 18,
  padding: 4,
  marginTop: 4,
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  borderRadius: 4,
  borderColor: "#616161",
  marginRight: 30,
  '&:hover': {
    cursor: 'pointer',
    color: '#616161',
  },
}));

const CodeBox = styled(Box)(() => ({
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
}));

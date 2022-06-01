import React from 'react';
import { Box, Grid, Container } from '@mui/material';
import main99 from '../../assets/images/main99.png';
import main98 from '../../assets/images/main98.png';
import donamoa from '../../assets/images/donamoa.png';
import tu2 from '../../assets/images/tu2.png';
import tu5 from '../../assets/images/tu5.png';
import modal from '../../assets/images/modal.PNG';
import search from '../../assets/images/search2.PNG';
import makeB from '../../assets/images/makeB2.PNG';
import textm from '../../assets/images/textm3.PNG';
import myB from '../../assets/images/myB.PNG';
import like from '../../assets/images/like2.PNG';
import ba from '../../assets/images/ba.PNG';
import MainCarousel from './Carousel2';

const MainTestComponent = () => {
  return (
    <div>
      <Container
        maxWidth={false}
        sx={{
          width: `100%`,
          minWidth: '1050px',
          //height: `${window.innerHeight}px`,
          height: `100vh`,
          minHeight: `700px`,
          //height: `100%`,
        }}
        disableGutters={true}
        justify="center"
      >
        <Box
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            width: `100%`,
            //height: `auto ${window.innerHeight}px`,
            //height: `auto !important`,
            height: `100%`,
            backgroundImage: `url(${tu2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Grid container spacing={0} sx={{ mb: 48 }}>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  display: 'inline',
                  fontWeight: 700,
                  fontFamily: 'Noto Sans KR',
                  mx: 0,
                  fontSize: 52,
                  color: '#424242',
                }}
              >
                기부의 모든 것
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  display: 'inline',
                  fontWeight: 700,
                  fontFamily: 'Noto Sans KR',
                  mx: 0,
                  fontSize: 52,
                  color: '#424242',
                }}
              >
                마모모에서 쉽고 간편하게
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          width: '100%',
          backgroundColor: '#FFF3F3',
          //backgroundImage: `url(${main99})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fce4ec',
          height: '800px',
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 500,
                fontFamily: 'Noto Sans KR',
                mx: 0,
                fontSize: 32,
                color: '#424242',
              }}
            >
              국내 모든 기부 플랫폼의 정보를 한눈에 조회하고 한 곳에서
              관리하세요.
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 500,
                fontFamily: 'Noto Sans KR',
                mx: 0,
                fontSize: 32,
                color: '#424242',
              }}
            >
              이제껏 경험 못 했던 쉽고 편리한 기부 서비스,
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 500,
                fontFamily: 'Noto Sans KR',
                mx: 0,
                fontSize: 32,
                color: '#424242',
              }}
            >
              마모모와 함께라면 당신의 일상이 새로워질 거에요.
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Container
        maxWidth={false}
        sx={{
          width: '1000px',
          //minWidth: '1920px',
        }}
        disableGutters={true}
        justify="center"
      >
        <Grid container spacing={2} sx={{ mt: 10 }}>
          <Grid item xs={5.5}>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 500,
                fontFamily: 'Noto Sans KR',
                fontSize: 24,
                color: '#f48fb1',
              }}
            >
              기부 캠페인
            </Box>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 700,
                fontFamily: 'Noto Sans KR',
                fontSize: 48,
                color: '#424242',
              }}
            >
              <br />
              다양한 플랫폼의 <br />
              기부 캠페인을
              <br /> 한눈에
            </Box>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Box
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                width: '100%',
                backgroundColor: '#fce4ec',
                backgroundImage: `url(${modal})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fce4ec',
                height: '480px',
                width: '100%',
                boxShadow: 24,
                borderRadius: 4,
              }}
            ></Box>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={5.5}>
            <br />
            <br />
            <br />
            <Box
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                width: '100%',
                backgroundColor: '#fce4ec',
                backgroundImage: `url(${donamoa})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fce4ec',
                height: '480px',
                width: '100%',
                boxShadow: 24,
                borderRadius: 4,
              }}
            ></Box>
            <br />
            <br />
            <br />
            <br />
            <Box
              sx={{
                display: 'inline',
                fontWeight: 500,
                fontFamily: 'Noto Sans KR',
                fontSize: 22,
                color: '#424242',
              }}
            >
              카테고리별 기부캠페인들을 확인해 보세요.
              <br /> 내용, 기부 금액, 진행 정도, 기관은 기본,
              <br /> 캠페인으로 직접 이동하여 확인할 수 있어요.
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ mt: 62 }}>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 500,
                fontFamily: 'Noto Sans KR',
                fontSize: 28,
                color: '#f48fb1',
              }}
            >
              서비스
            </Box>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 700,
                fontFamily: 'Noto Sans KR',
                fontSize: 48,
                color: '#424242',
              }}
            >
              <br />
              간편하게 찾고,
              <br /> 효과적으로 홍보하는,
              <br /> 이런 기부 해보셨나요?
            </Box>
          </Grid>
          <Grid item xs={5.5} sx={{ mt: 10 }}>
            <Container
              maxWidth={false}
              sx={{
                //width: '1000px',
                //minWidth: '1920px',
                ml: 4,
              }}
              disableGutters={true}
              justify="center"
            >
              <Box
                sx={{
                  display: 'inline',
                  fontWeight: 600,
                  fontFamily: 'Noto Sans KR',
                  fontSize: 20,
                  color: '#f48fb1',
                }}
              >
                검색
              </Box>
              <Box
                sx={{
                  display: 'inline',
                  fontWeight: 700,
                  fontFamily: 'Noto Sans KR',
                  fontSize: 36,
                  color: '#424242',
                }}
              >
                <br />
                카테고리 및 태그 검색으로
                <br />
                모두에게 간편함을
              </Box>
              <Box
                sx={{
                  display: 'inline',
                  fontWeight: 700,
                  fontFamily: 'Noto Sans KR',
                  fontSize: 20,
                  color: '#757575',
                }}
              >
                <br />
                <br />
                10개의 카테고리와 약 200개의 태그로
                <br /> 원하는 캠페인을 간편하게 찾으세요.
              </Box>
            </Container>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={5.5} sx={{ mt: 12 }}>
            <Box
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                width: '100%',
                backgroundColor: '#fce4ec',
                backgroundImage: `url(${search})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fce4ec',
                height: '240px',
                width: '80%',
                boxShadow: 24,
                borderRadius: 4,
                ml: 4,
              }}
            ></Box>
          </Grid>
          <Grid item xs={5.5} sx={{ mt: 16 }}>
            <Box
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                width: '100%',
                backgroundColor: '#fce4ec',
                backgroundImage: `url(${makeB})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fce4ec',
                height: '240px',
                width: '80%',
                boxShadow: 24,
                borderRadius: 4,
                ml: 8,
              }}
            ></Box>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={5.5} sx={{ mt: 12 }}>
            {' '}
            <Container
              maxWidth={false}
              sx={{
                //width: '1000px',
                //minWidth: '1920px',
                ml: 4,
              }}
              disableGutters={true}
              justify="center"
            >
              <Box
                sx={{
                  display: 'inline',
                  fontWeight: 600,
                  fontFamily: 'Noto Sans KR',
                  fontSize: 20,
                  color: '#f48fb1',
                }}
              >
                배너 제작
              </Box>
              <Box
                sx={{
                  display: 'inline',
                  fontWeight: 700,
                  fontFamily: 'Noto Sans KR',
                  fontSize: 36,
                  color: '#424242',
                }}
              >
                <br />
                캠페인을 커스터마이징해서
                <br />
                홍보할 수 있어요
              </Box>
              <Box
                sx={{
                  display: 'inline',
                  fontWeight: 700,
                  fontFamily: 'Noto Sans KR',
                  fontSize: 20,
                  color: '#757575',
                }}
              >
                <br />
                <br />
                원하는 기부 캠페인을 직접 배너로 만들어 보세요.
                <br /> 크기부터 색상, 내용, 섬네일까지 원하는대로 <br />
                커스터마이징 할 수 있어요.
              </Box>
            </Container>
          </Grid>
          <Grid item xs={5.5} sx={{ mt: 12 }}>
            <Container
              maxWidth={false}
              sx={{
                //width: '1000px',
                //minWidth: '1920px',
                ml: 4,
              }}
              disableGutters={true}
              justify="center"
            >
              <Box
                sx={{
                  display: 'inline',
                  fontWeight: 600,
                  fontFamily: 'Noto Sans KR',
                  fontSize: 20,
                  color: '#f48fb1',
                }}
              >
                기부 추천
              </Box>
              <Box
                sx={{
                  display: 'inline',
                  fontWeight: 700,
                  fontFamily: 'Noto Sans KR',
                  fontSize: 36,
                  color: '#424242',
                }}
              >
                <br />
                텍스트로 찾는다면,
                <br /> 직접 찾을 필요 없어요
              </Box>
              <Box
                sx={{
                  display: 'inline',
                  fontWeight: 700,
                  fontFamily: 'Noto Sans KR',
                  fontSize: 20,
                  color: '#757575',
                }}
              >
                <br />
                <br />
                마모모의 추천시스템을 이용해보세요.
                <br /> 기사 본문이나 블로그 같은 장문의 글을 분석해서 <br />
                캠페인을 추천해 드릴게요.
              </Box>
            </Container>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={5.5} sx={{ mt: 16 }}>
            <Box
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                width: '100%',
                backgroundColor: '#fce4ec',
                backgroundImage: `url(${textm})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fce4ec',
                height: '240px',
                width: '80%',
                boxShadow: 24,
                borderRadius: 4,
                ml: 4,
              }}
            ></Box>
          </Grid>
          <Grid container spacing={0} sx={{ mt: 62 }}>
            <Grid item xs={5.5}>
              <Box
                sx={{
                  display: 'inline',
                  fontWeight: 500,
                  fontFamily: 'Noto Sans KR',
                  fontSize: 28,
                  color: '#f48fb1',
                }}
              >
                배너모아
              </Box>
              <Box
                sx={{
                  display: 'inline',
                  fontWeight: 700,
                  fontFamily: 'Noto Sans KR',
                  fontSize: 48,
                  color: '#424242',
                }}
              >
                <br />
                사용자들이 만든
                <br /> 다양한 배너를
                <br /> 직접 확인해보세요
              </Box>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5.5} sx={{ mt: 13 }}>
              <Box
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  width: '100%',
                  backgroundColor: '#fce4ec',
                  backgroundImage: `url(${ba})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: '#fce4ec',
                  height: '240px',
                  width: '80%',
                  boxShadow: 24,
                  borderRadius: 4,
                  ml: 4,
                }}
              ></Box>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: 10 }}>
            <MainCarousel />
          </Grid>
          <br />
          <br />
          <Grid item xs={12} sx={{ mt: 62 }}>
            {' '}
            <Box
              sx={{
                display: 'inline',
                fontWeight: 500,
                fontFamily: 'Noto Sans KR',
                fontSize: 28,
                color: '#f48fb1',
              }}
            >
              마이페이지
            </Box>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 700,
                fontFamily: 'Noto Sans KR',
                fontSize: 48,
                color: '#424242',
              }}
            >
              <br />
              기부 생활의 첫 걸음,
              <br /> 마이페이지에서
              <br /> 쉽게 관리하세요
            </Box>
          </Grid>
          <Grid item xs={5.5} sx={{ mt: 8 }}>
            {' '}
            <Box
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                width: '100%',
                backgroundColor: '#fce4ec',
                backgroundImage: `url(${like})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fce4ec',
                height: '240px',
                width: '80%',
                boxShadow: 24,
                borderRadius: 4,
                //ml: 8,
              }}
            ></Box>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 700,
                fontFamily: 'Noto Sans KR',
                fontSize: 28,
                color: '#424242',
              }}
            >
              <br />
              <br />
              '좋아요' 캠페인
            </Box>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 700,
                fontFamily: 'Noto Sans KR',
                fontSize: 20,
                color: '#757575',
              }}
            >
              <br />
              <br />
              관심있는 캠페인에 하트아이콘을 눌러보세요.
              <br /> 마이페이지에서 '좋아요' 캠페인을 확인할
              <br /> 수 있어요.
            </Box>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={5.5} sx={{ mt: 8 }}>
            {' '}
            <Box
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                width: '100%',
                backgroundColor: '#fce4ec',
                backgroundImage: `url(${myB})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fce4ec',
                height: '240px',
                width: '80%',
                boxShadow: 24,
                borderRadius: 4,
                //ml: 4,
              }}
            ></Box>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 700,
                fontFamily: 'Noto Sans KR',
                fontSize: 28,
                color: '#424242',
              }}
            >
              <br />
              <br />
              내가 만든 배너
            </Box>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 700,
                fontFamily: 'Noto Sans KR',
                fontSize: 20,
                color: '#757575',
              }}
            >
              <br />
              <br />
              마이페이지에서 그동안
              <br /> 내가 제작한 배너를 확인하고 편집할
              <br /> 수 있어요.
            </Box>
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          width: '100%',
          backgroundColor: '#FFF3F3',
          //backgroundImage: `url(${main99})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fce4ec',
          height: '600px',
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 500,
                fontFamily: 'Noto Sans KR',
                mx: 0,
                fontSize: 32,
                color: '#424242',
              }}
            >
              마모모는 2022 한성대 컴퓨터 공학부 캡스톤 디자인 프로젝트입니다.
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 500,
                fontFamily: 'Noto Sans KR',
                mx: 0,
                fontSize: 32,
                color: '#424242',
              }}
            >
              -팀 두이두아-
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center', mt: 1 }}>
            <Box
              sx={{
                display: 'inline',
                fontWeight: 500,
                fontFamily: 'Noto Sans KR',
                mx: 0,
                fontSize: 20,
                color: '#757575',
              }}
            >
              서석원 이혜진 임서영 임유선
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MainTestComponent;

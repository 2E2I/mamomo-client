import React from 'react';
import { Box, Grid, Container } from '@mui/material';
import main99 from '../../assets/images/main99.png';
import main98 from '../../assets/images/main98.png';
import donamoa from '../../assets/images/donamoa.png';

const MainTestComponent = () => {
  return (
    <div>
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          width: '100%',
          backgroundColor: '#fce4ec',
          backgroundImage: `url(${main99})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fce4ec',
          height: '1000px',
        }}
      >
        <Grid container spacing={0} sx={{ mb: 70 }}>
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
              카테고리 별 기부캠페인들을 확인해 보세요.
              <br /> 내용, 기부 금액, 진행 정도, 기관은 기본,
              <br /> 캠페인으로 직접 이동하여 확인할 수 있어요.
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ mt: 34 }}>
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
              간편하고 찾고,
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
                누구에게 보내든 은행 상관 없이,
                <br /> 이제 토스와 함께 수수료 걱정 없이 송금하세요.
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
                backgroundImage: `url(${donamoa})`,
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
                backgroundImage: `url(${donamoa})`,
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
          <Grid item xs={5.5} sx={{ mt: 14 }}>
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
                기부글을 커스터마이징해서
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
                송금 전 토스가 알아서 사기 내역 조회를 해드려요.
                <br /> 상대방의 연락처 또는 계좌가 사기 계좌인지 조회해 <br />
                안전하게 송금할 수 있어요.
              </Box>
            </Container>
          </Grid>
          <Grid item xs={5.5} sx={{ mt: 14 }}>
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
                은행 점검 시간에는 자동이체 예약을 이용해보세요.
                <br /> 점검 시간이 끝나면 토스가 알아서 송금해드릴게요.
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
                backgroundImage: `url(${donamoa})`,
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
          <Grid item xs={12} sx={{ mt: 34 }}>
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
                backgroundImage: `url(${donamoa})`,
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
              <br />'좋아요' 캠페인
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
              언제 어디서든, 원할 때 간편하게
              <br /> KCB, NICE 신용점수를 한 곳에서 확인할
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
                backgroundImage: `url(${donamoa})`,
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
              통신비, 일반 납부내역 등의 서류를
              <br /> 토스에서 바로 제출해 신용점수를 올릴 수<br /> 있어요.
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MainTestComponent;

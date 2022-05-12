import React from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// 텍스트마이닝 페이지 소개
const Intro = () => {

  const summary = "''텍스트마이닝 (Text Mining)'' 기반의 기부글 추천"
  const detail = "텍스트 마이닝이란, 비/반정형 텍스트 데이터에서 자연어처리(Natural Language Processing)기술에 기반하여 유용한 정보를 추출, 가공하는 것을 목적으로 하는 기술"

  return (
    <Box
      sx={{
        m: "30px 0 0 0",
      }}
    >
      <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            bgcolor: "#efefef"
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontStyle: "italic"
            }}
          >
            {summary}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            bgcolor: "#fcfcfc"
          }}
        >
          <Typography>
            {detail}
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
    </Box>
  );
};

export default Intro;
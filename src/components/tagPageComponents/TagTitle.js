import { Box, Container, styled } from "@mui/material";
import React from "react";

import { SearchPageStore } from '../../store/SearchPageStore';

const TagTitle = () => {
  const { tagName } = SearchPageStore();

  return (
      <Box
        sx={{
          display: 'flex',
          //border: 1,
          margin: '30px 0 50px 0',
        }}
      >
        <Box
          sx={{
            borderRadius: '20px',
            height: '95px',
            width: '1000px',
            fontSize: '32px',
            fontFamily: 'Noto Sans KR',
            fontWeight: 700,
            bgcolor: '#DB7093',
            color: '#FFFFFF',
            padding: '20px'
          }}
        >
          #{tagName}
        </Box>
      </Box>
  )
}

export default TagTitle;

const TitleBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  height: '300px'
}));

const TextBox = styled(Box)(() => ({
  fontSize: '32px',
  fontFamily: 'Noto Sans KR',
  fontWeight: 750,
}))
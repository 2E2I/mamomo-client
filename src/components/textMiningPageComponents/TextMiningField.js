import React from 'react';
import { Box, TextField } from '@mui/material';

import { TextMiningPageStore } from '../../store/TextMiningPageStore';

// 텍스트마이닝 텍스트필드
const TextminingField = () => {

  const { text, setText } = TextMiningPageStore();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {
          marginTop: '50px', 
          width: '100%'
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="텍스트를 입력하세요."
        multiline
        rows={12}
        value={text}
        onChange={handleChange}
      />
    </Box>
  );
};

export default TextminingField;
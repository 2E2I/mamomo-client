import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const EditForm = () => {
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    
    return (
      <div>
        <TextField
          fullWidth
          id="outlined-multiline-static"
          label="제목"
          multiline
          defaultValue="익산시민 희망공약제안 캠페인을 응원해주세요."
          sx={{ mb: 4 }}
        />

        <TextField
          fullWidth
          id="outlined-multiline-static"
          label="내용"
          multiline
          rows={4}
          defaultValue="시민이 직접 공약을 제안합니다.우리 익산을 위해 필요하다고 생각하는 아이디어가 있는 시민이면 누구나 참여 가능하며, 아이디어를 구체적인 공약으로 만들어 직접 제안하는 것입니다."
        />
      </div>
    );
};

export default EditForm;
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const TagTitle = () => {
    return (
        <div>
            <TitleBox>추천태그</TitleBox>
        </div>
        
    );
};

export default TagTitle;

const TitleBox = styled(Box)(() => ({
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '50px 0 0 0',
    display: 'flex',
    flexWrap: { xs: 'wrap', md: 'nowrap' },
    listStyle: 'none',
    p: 0.4,
    m: { xs: 2, md: 4 },
    mr: 1,
    ml: 1,
    boxShadow: '0',
    justifyContent: 'center',
    width: { xs: '340px', sm: '100%' },
}));
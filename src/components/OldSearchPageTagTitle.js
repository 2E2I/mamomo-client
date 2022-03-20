import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

const TagTitle = () => {
  return (
    <div>
      <Grid container justifyContent="center">
        <TitleBox>
          <InnerFontBox>모든 카테고리</InnerFontBox>
        </TitleBox>
      </Grid>
    </div>
  );
};

export default TagTitle;

const TitleBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  listStyle: 'none',
  boxShadow: '0',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '970px',
  maxWidth: '100%'
}));

const InnerFontBox = styled(Box)(() => ({
  fontSize: '20px',
  fontWeight: 'bold',
  padding: '50px 15px 15px 15px'
}));
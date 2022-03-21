import * as React from 'react';
import { Box, Grid, Chip, styled } from '@mui/material';
import { useState, useEffect } from 'react';

const Tag = ({ tags }) => {
  const [tag, setTag] = useState('');
  const [tagClick, setTagClick] = useState(false);

  useEffect(() => {
    setTag(tags !== undefined && tags.category);
    return () => {};
  }, []);

  return (
    <Grid>
      <TagChip
        label={
          <InnerBox>#{tag}</InnerBox>
        }
        variant='outlined'
        color='primary'
        clickable
        onClick={setTagClick}
      />
    </Grid>
  )
}

export default Tag;

const TagChip = styled(Chip)(() => ({
  padding: '5px',
  height: '40px',
  fontSize: { xs: 1, md: 1 },
  borderColor: 'primary',
  borderRadius: 25,
  margin: '5px 5px 5px 0',
}));

const InnerBox = styled(Box)(() => ({
  fontSize: { xs: 13, md: 16 },
}))
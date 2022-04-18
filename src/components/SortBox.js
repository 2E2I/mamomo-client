import React, { useState } from 'react';
import { Box, styled } from '@mui/material';

import { CategoryStore } from '../store/CategoryPageStore';
import { makeStyles } from '@mui/styles';
import { color } from '@mui/system';


const color1 = (colorN, index) => {
  if (colorN == index) return '#424242';
  else return '#bdbdbd';
};

const SortBox = () => {
  const { setSortValue, sortIndex, setSortIndex } = CategoryStore(); //zustand
  const [index, setIndex] = useState(1);
  

  return (
    <InnerOrganizationTitleBox>
      <SortButton
        colorN={3}
        onClick={() => {
          setSortValue('sort=due_date,ASC');
          setSortIndex(3);
        }}
        sx={{ color: color1(3, sortIndex) }}
      >
        마감순
      </SortButton>
      <SortButton
        colorN={2}
        onClick={() => {
          setSortValue('sort=start_date,DESC');
          setSortIndex(2);
        }}
        sx={{ color: color1(2, sortIndex) }}
      >
        최신순
      </SortButton>
      <SortButton
        colorN={1}
        onClick={() => {
          setSortValue('sort=heart_count,DESC');
          setSortIndex(1);
        }}
        sx={{ color: color1(1, sortIndex) }}
      >
        추천순
      </SortButton>
    </InnerOrganizationTitleBox>
  );
};

export default SortBox;


const InnerOrganizationTitleBox = styled(Box)(() => ({
  direction: 'rtl',
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
}));

const SortButton = styled(Box)((colorN) => ({
  fontWeight: 700,
  fontSize: 18,
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  marginRight: '20px',
  '&:hover': {
    cursor: 'pointer',
    color: '#616161',
  },
}));

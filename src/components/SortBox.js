import React from 'react';
import { Box, styled } from '@mui/material';

const sortBox = () => {
    return (
      <InnerOrganizationTitleBox>
        <SortButton>추천순</SortButton>
        <SortButton>최신순</SortButton>
        <SortButton>마감순</SortButton>
      </InnerOrganizationTitleBox>
    );
};

export default sortBox;

const InnerOrganizationTitleBox = styled(Box)(() => ({
  direction: 'rtl',
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
}));

const SortButton = styled(Box)(() => ({
  fontWeight: 700,
  fontSize: 18,
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  color: '#bdbdbd',
  marginRight: '20px',
  '&:hover': {
    cursor: 'pointer',
    color: '#616161',
  },
}));
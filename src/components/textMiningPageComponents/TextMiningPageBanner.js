import React from 'react';
import { Box, styled } from '@mui/material';
import spb from '../../assets/images/sak.jpg';

const TextMiningPageBanner = () => {
  return (
    <InnerOrganizationTitleBox textAlign="center">
      <SortButton>기부 추천</SortButton>
    </InnerOrganizationTitleBox>
  );
};

export default TextMiningPageBanner;

const InnerOrganizationTitleBox = styled(Box)(() => ({
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignContent: 'center',
  backgroundColor: '#f9fbe7',
  backgroundImage: `url(${spb})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  alignItems: 'center',
  height: 100,
  borderRadius: 10,
  marginBottom: 10,
}));

const SortButton = styled(Box)(() => ({
  fontWeight: 600,
  fontSize: 28,
  fontFamily: 'Noto Sans KR',
  textOverflow: 'ellipsis',
  alignItems: 'center',
  overflow: 'hidden',
  color: '#fafafa',
  marginLeft: 700,
}));

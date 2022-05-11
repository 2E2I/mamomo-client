import React from 'react';
import { Container } from '@mui/material';

import TopAppBar from '../../components/TopAppBar';
import TextMiningPageBanner from '../../components/textMiningPageComponents/TextMiningPageBanner';
import TextMiningField from '../../components/textMiningPageComponents/TextMiningField';
import SaveButton from '../../components/textMiningPageComponents/SaveButton';
import TextMiningPageDonationList from '../../components/textMiningPageComponents/TextMiningPageDonationList';
import Paging from '../../components/Paging';

// 텍스트마이닝 페이지
const TextMiningPage = () => {

  return (
    <Container
      maxWidth={false}
      sx={{
        width: '1000px',
      }}
      disableGutters={true}
      justify="center"
    >
      <TopAppBar />

      <TextMiningPageBanner />
      <TextMiningField />
      {/* <SaveButton /> */}
      <TextMiningPageDonationList />
      <Paging />

    </Container>
  );
}

export default TextMiningPage;
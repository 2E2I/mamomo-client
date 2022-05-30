import React, { useEffect } from 'react';
import { Container } from '@mui/material';

import TopAppBar from '../../components/TopAppBar';
import TextMiningPageBanner from '../../components/textMiningPageComponents/TextMiningPageBanner';
import TextMiningField from '../../components/textMiningPageComponents/TextMiningField';
import SaveButton from '../../components/textMiningPageComponents/SaveButton';
import Intro from '../../components/textMiningPageComponents/Intro';

import { CategoryStore } from '../../store/CategoryPageStore';

// 텍스트마이닝 페이지
const TextMiningPage = () => {

  const { initializeSortIndex } = CategoryStore();

  useEffect(() => {
    initializeSortIndex()
  }, [])

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
      <Intro />
      <TextMiningField />
      <SaveButton />

    </Container>
  );
}

export default TextMiningPage;
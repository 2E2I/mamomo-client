import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import TagPageDonationList from '../../components/tagPageComponents/TagPageDonationList'
import TopAppBar from '../../components/TopAppBar';

const TagPage = () => {
  return (
    <Container
      maxwidth="false"
      sx={{
        width:"1000px",
      }} 
      disablegutters="true"
      justify="center"
      >
        <TopAppBar />
        <TagPageDonationList />
  </Container>
  )
}

export default TagPage;
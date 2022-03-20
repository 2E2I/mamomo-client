import React from 'react';
import TopAppBar from '../../components/TopAppBar';
import RoundSearchBar from '../../components/RoundSearchBar';
import OldTagTitle from '../../components/OldSearchPageTagTitle';
import OldTags from '../../components/OldSearchPageTags';
import Category from '../../components/searchPageComponents/CategoryTag'
import { Box, styled, Grid } from '@mui/material';
import { useState } from 'react';

const SearchPage = (props) => {
  const [title, setTitle] = useState(['추천 태그', '인기 태그', '모든 카테고리']);
  return (
    <div>
      <TopAppBar />
      <RoundSearchBar />
      <hr/>수정 tag
      <Grid container justifyContent="center">
        <TitleBox>
          <InnerFontBox>
            {title[2]}
          </InnerFontBox>
        </TitleBox>
      </Grid>
      <Category />
      {/* {
        title.map((i) => {
          return (
            <Grid container justifyContent="center">
            <TitleBox>
              <InnerFontBox>
                {i}
              </InnerFontBox>
            </TitleBox>
          </Grid>
          )
        })
      } */}
      <hr/>old tag
      <OldTagTitle />
      <OldTags />
    </div>
  )
};

export default SearchPage;

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
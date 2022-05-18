import React, { createContext, useState, useEffect } from 'react';

import { Avatar, Box, styled } from '@mui/material';

import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { SearchPageStore } from '../../store/SearchPageStore';

import family from '../../assets/images/category/가족여성.jpg';
import culture from '../../assets/images/category/다문화.jpg';
import animal from '../../assets/images/category/동물.jpg';
import child from '../../assets/images/category/아동청소년.jpg';
import help from '../../assets/images/category/어려운이웃.jpg';
import old from '../../assets/images/category/어르신.jpg';
import society from '../../assets/images/category/우리사회.jpg';
import disabled from '../../assets/images/category/장애인.jpg';
import global from '../../assets/images/category/지구촌.jpg';
import env from '../../assets/images/category/환경.jpg';

const Tag = () => {
  const [tag, setTag] = useState('');
  const categories = Object.values(tag);
  const list = categories[0];
  const { setCategoryIndex, setTagName } = SearchPageStore();
  const { setTagType } = SearchPageStore();
  const imgArray = [child, old, disabled, help, culture, global, family, society, animal, env];

  const history = useHistory();

  const categoryList =
    list &&
    list.map((tag, index) => (
      <Box
        m="10px 20px 15px 0"
        onClick={() => {
          setCategoryIndex(index + 1);
          setTagName(list[index]);
          setTagType('카테고리태그');
          history.push(`tags/${tag}`)
        }}
      >
        <Avatar
          alt={tag}
          src={imgArray[index]}
          sx={{
            width: "100px",
            height: "100px",
          }}
        />
        <Box component={"center"}
          sx={{
            marginTop: "5px",
            fontSize: "14px",
            fontFamily: "Noto Sans KR",
            fontWeight: 450
          }}
        >
          {tag}
        </Box>
      </Box>
    ));

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/categories`)
      .then((result) => {
        console.log('연결');
        setTag(result.data);
      })
      .catch((e) => {
        console.log(e);
        console.log('연결실패');
      });
    return () => {};
  }, []);

  return (
    <TagBox>
      {categoryList}
    </TagBox>
  )
}

export default Tag;
export const num = createContext(0);

const TagBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  listStyle: 'none',
  boxShadow: '0',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '970px',
  maxWidth: '100%',
  padding: '0 15px 0 15px',
}));
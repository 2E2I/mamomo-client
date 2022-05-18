import * as React from 'react';
import { Box, Chip, styled, Grid } from '@mui/material';

import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { SearchPageStore } from '../../store/SearchPageStore';

const AllTag = () => {

  const [tag, setTag] = useState('');
  const categories = Object.values(tag);
  const list = categories[0];
  const { setCategoryIndex, setTagName } = SearchPageStore();
  const { tagType, setTagType } = SearchPageStore();

  const [num, setNum] = useState(0);
  const [moreClick, setMoreClick] = useState(false);
  const [foldClick, setFoldClick] = useState(false);

  const categoryList =
    list &&
    list.map((tag, index) => (
      <Link to={`tags/${tag}`} style={{ textDecoration: 'none' }}>
          <TagChip
            key={index}
            label={<InnerBox>#{tag}</InnerBox>}
            variant="outlined"
            color="primary"
            clickable
            onClick={() => {
              setCategoryIndex(index + 1);
              setTagName(list[index]);
              setTagType('모든태그');
            }}
          />
      </Link>
    ));

  useEffect (() => {
    axios
      .get(`http://localhost:8080/api/search?from=${num}&to=${num + 10}`)
      .then((result) => {
        console.log('연결');
        setNum(num + 10);
        setTag(result.data);
      })
      .catch((e) => {
        console.log(e);
        console.log('연결실패');
      });
    return () => {};
  }, []);

  const loadMore = async () => {
    setNum(num + 10);
    axios
      .get(`http://localhost:8080/api/search?from=${0}&to=${num + 10}`)
      .then((result) => {
        console.log('연결');
        setNum(num + 10);
        setTag(result.data);
        setMoreClick(true);
      })
      .catch((e) => {
        console.log(e);
        console.log('연결실패');
      });
  }
  
  const fold = () => {
    setFoldClick(true);
    axios
    .get(`http://localhost:8080/api/search?from=${0}&to=${10}`)
    .then((result) => {
      console.log('연결');
      setTag(result.data);
      setNum(num);
    })
    .catch((e) => {
      console.log(e);
      console.log('연결실패');
    });
  }

  const open = () => {
    setFoldClick(false);
    axios
    .get(`http://localhost:8080/api/search?from=${0}&to=${num}`)
    .then((result) => {
      console.log('연결');
      setTag(result.data);
    })
    .catch((e) => {
      console.log(e);
      console.log('연결실패');
    });
  }

  return (
    <Grid container justifyContent="center">
      <TagBox>
        {categoryList}
      </TagBox>

        {
          foldClick ? 
          (
            null
          ) : (
              <Chip
                label="더보기"
                clickable
                onClick={ loadMore }
                sx={{
                  marginTop: "10px",
                  width: "80px",
                  height: "35px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#ffffff",
                  bgcolor: "#6376d2",
                  ":hover": {
                    bgcolor: "#495695",
                    color: "#ffffff",
                  },
                }}
              />
          )
        }
        
        {
          moreClick ?
          (
            foldClick ?
            (
              <Chip
                label="▼ 열기"
                clickable
                variant="outlined"
                onClick={ open }
                sx={{
                  m: "10px 0 0 5px",
                  width: "70px",
                  height: "35px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#979797",
                  ":hover": {
                    bgcolor: "#cccccc",
                    color: "#979797",
                  },
                }}
              />
            ) : (
              <Chip
                label="▲ 접기"
                clickable
                onClick={ fold }
                sx={{
                  m: "10px 0 0 5px",
                  width: "70px",
                  height: "35px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#ffffff",
                  bgcolor: "#b0b0b0",
                  ":hover": {
                    bgcolor: "#979797",
                    color: "#ffffff",
                  },
                }}
              />
            )
          ) : (
            null
          )
        }
    </Grid>
  )
}

export default AllTag;
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
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

  var result = [];
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(25);
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
      .get("http://localhost:8080/api/search")
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

  const loadMore = () => {
    setNum2(num2 + 10);
    rendering(num2, num2 + 10);
    setMoreClick(true);
  }
  
  const fold = () => {
    setFoldClick(true);
  }

  const open = () => {
    setFoldClick(false);
  }

  const rendering  = (m, n) => {
    for (let i = m; i < n; i++) {
      result.push(<span key={i}>{categoryList[i]}</span>)
    }
    return result;
  }

  const foldRendering  = () => {
    var arr= [];
    for (let i = num1; i < 25; i++) {
      arr.push(<span key={i}>{categoryList[i]}</span>)
    }
    return arr;
  }

  return (
    <Grid container justifyContent="center">
      {
        categoryList ?
        (
          foldClick ?
            (
              <TagBox>
                { foldRendering(num1, 25) }
              </TagBox>
            ) : (
              <TagBox>
                { rendering(num1, num2) }
              </TagBox>
            )
        ) : (
          null
        )
      }

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
                m: "10px 0 50px 0",
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
                m: "10px 0 50px 5px",
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
            <>
              <Chip
                label="▲ 접기"
                clickable
                variant="outlined"
                onClick={ fold }
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
            </>
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
 fontFamily: 'Noto Sans KR',
}))
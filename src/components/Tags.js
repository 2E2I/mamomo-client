import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { Box, Grid, Typography } from '@mui/material';

const Categorie = () => {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: '#어린이' },
    { key: 1, label: '#여성' },
    { key: 2, label: '#어르신' },
    { key: 3, label: '#장애인' },
    { key: 4, label: '#우리사회' },
    { key: 5, label: '#지구촌' },
    { key: 6, label: '#가족|여성' },
    { key: 7, label: '#우리사회' },
  ]);

  return (
    <Grid container justifyContent="center">
      <CategoriesBox component="ul">
        {chipData.map((data) => {
          let icon;
          return (
            <ListItem key={data.key}>
              <CategorieChip>
                {/* <Typography>{data.label}</Typography> */}
                {data.label}
              </CategorieChip>
            </ListItem>
          );
        })}
      </CategoriesBox>
    </Grid>
  );
};

export default Categorie;

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const CategoriesBox = styled(Box)(() => ({
  margin: '15px',
  marginTop: '5px',
  //paddingRight: { xs: 10, md: 5 },
  //paddingLeft: { xs: 10, md: 5 },
  display: 'flex',
  flexWrap: { xs: 'wrap', md: 'nowrap' },
  listStyle: 'none',
  boxShadow: '0',
  justifyContent: 'center',
  width: { xs: '340px', sm: '100%' },
}));

const CategorieChip = styled(Box)(() => ({
  paddingTop: '7px',
  fontFamily: 'Noto Sans KR',
  fontSize: '18px',
  mb: '10px',
  // backgroundColor: '#ff80ab',
  background: `linear-gradient(to right, #f8bbd0,#ff80ab)`,
  color: '#f5f5f5',
  borderRadius: '12px',
  width: 110,
  height: 40,
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  fontSize: 16,
  fontWeight: '500',
  '&:hover': {
    cursor: 'pointer',
    color: '#ec407a',
  },
}));

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { Box, Grid } from '@mui/material';

const Categorie = () => {
    const [chipData, setChipData] = React.useState([
        { key: 0, label: '#어린이' },
        { key: 1, label: '#여성' },
        { key: 2, label: '#어르신' },
        { key: 3, label: '#장애인' },
        { key: 4, label: '#우리사회' },
        { key: 5, label: '#지구촌' },
      ]);

  return (
    <Grid container justifyContent="center">
      <CategoriesBox component="ul">
        {chipData.map((data) => {
          let icon;
          return (
            <ListItem key={data.key}>
              <CategorieChip
                color="primary"
                variant="outlined"
                icon={icon}
                label={<InnerFontBox>{data.label}</InnerFontBox>}
              />
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
  margin: '30px',
  marginTop: '10px',
  //paddingRight: { xs: 10, md: 5 },
  //paddingLeft: { xs: 10, md: 5 },
  display: 'flex',
  flexWrap: { xs: 'wrap', md: 'nowrap' },
  listStyle: 'none',
  boxShadow: '0',
  justifyContent: 'center',
  width: { xs: '340px', sm: '100%' },
}));

const CategorieChip = styled(Chip)(() => ({
  //minWidth: { xs: '80px', md: '140px' },
  //maxWidth: { xs: '100px', md: '140px' },
  width: '110px',
  height: '60px',
  fontSize: { xs: 1, md: 1 },
  borderRadius: 30,
}));

const InnerFontBox = styled(Box)(() => ({
  fontSize: 16,
  fontWeight: '300',
  fontFamily: 'Noto Sans KR',
}));

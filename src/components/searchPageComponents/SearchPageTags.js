import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { Box, Grid } from '@mui/material';

const Tags = () => {
    const [chipData, setChipData] = React.useState([
        { key: 0, label: '어린이' },
        { key: 1, label: '여성' },
        { key: 2, label: '어르신' },
        { key: 3, label: '장애인' },
        { key: 4, label: '우리사회' },
        { key: 5, label: '지구촌' },
      ]);

  return (
    <div>
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
                    label={<InnerFontBox>#{data.label}</InnerFontBox>}
                />
                </ListItem>
            );
            })}
        </CategoriesBox>
        </Grid>
    </div>
  );
};

export default Tags;

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const CategoriesBox = styled(Box)(() => ({
  margin: '10px',
  //paddingRight: { xs: 10, md: 5 },
  //paddingLeft: { xs: 10, md: 5 },
  display: 'flex',
  flexWrap: { xs: 'wrap', md: 'nowrap' },
  listStyle: 'none',
  p: 0.4,
  m: { xs: 2, md: 4 },
  mr: 1,
  ml: 1,
  boxShadow: '0',
  justifyContent: 'center',
  width: { xs: '340px', sm: '100%' },
}));

const CategorieChip = styled(Chip)(() => ({
  //minWidth: { xs: '80px', md: '140px' },
  //maxWidth: { xs: '100px', md: '140px' },
  //width: '110px',
  padding: '5px',
  height: '40px',
  fontSize: { xs: 1, md: 1 },
  borderRadius: 25,
}));

const InnerFontBox = styled(Box)(() => ({
  fontSize: { xs: 13, md: 16 },
}));
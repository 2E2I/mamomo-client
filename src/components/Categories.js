import * as React from 'react';
import { Box, Chip, styled } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import ElderlyIcon from '@mui/icons-material/Elderly';
import AccessibleIcon from '@mui/icons-material/Accessible';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PetsIcon from '@mui/icons-material/Pets';
import ForestIcon from '@mui/icons-material/Forest';

const Tag = () => {
  const [tag, setTag] = useState('');
  const [tagClick, setTagClick] = useState(false);
  const categories = Object.values(tag);
  const list = categories[0];

  const childCareIcon = <ChildCareIcon sx={{fontSize: 40,}}/>;
  const elderlyIcon = <ElderlyIcon sx={{ fontSize: 40 }} />;
  const accessibleIcon = <AccessibleIcon sx={{ fontSize: 40 }} />;
  const groupsIcon = <GroupsIcon sx={{ fontSize: 40 }} />;
  const peopleIcon = <PeopleIcon sx={{ fontSize: 40 }} />;
  const publicIcon = <PublicIcon sx={{ fontSize: 40 }} />;
  const familyRestroomIcon = <FamilyRestroomIcon sx={{ fontSize: 40 }} />;
  const locationCityIcon = <LocationCityIcon sx={{ fontSize: 40 }} />;
  const petsIcon = <PetsIcon sx={{ fontSize: 40 }} />;
  const forestIcon = <ForestIcon sx={{ fontSize: 40 }} />;

  const a = [
    childCareIcon,
    elderlyIcon,
    accessibleIcon,
    groupsIcon,
    peopleIcon,
    publicIcon,
    familyRestroomIcon,
    locationCityIcon,
    petsIcon,
    forestIcon,
  ];

  const categoryList =
    list &&
    list.map((tag, index) => (
      <InnerBox>
        <Test tag={tag} icon={a[index]} />
      </InnerBox>
    ));

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/categories`)
      .then((result) => {
        console.log('연결');
        setTag(result.data);
      })
      .catch(() => {
        console.log('연결실패');
      });
    return () => {};
  }, []);

  return (
    <>
      <TagBox>{categoryList}</TagBox>
    </>
  );
};

function Test(props) {
  return (
    <Box
      textAlign="center"
      sx={{
        marginRight: 1,
        width: 80,
        color: '#616161',
        '&:hover': {
          cursor: 'pointer',
          color: '#f8bbd0',
        },
      }}
    >
      {props.icon}
      <Box
        sx={{
          fontWeight: 700,
          fontFamily: 'Noto Sans KR',
          mx: 0.5,
          fontSize: 14,
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        }}
      >
        {props.tag}
      </Box>
    </Box>
  );
}

export default Tag;

const TagBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none',
  justifyContent: 'center',
  maxWidth: '100%',
  padding: '0 15px 0 15px',
}));

const InnerBox = styled(Box)(() => ({
  fontSize: 16,
}));

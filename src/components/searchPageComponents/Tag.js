import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { Box, Grid } from '@mui/material';
import { useState, useEffect } from 'react';

const Tag = ({ Tag }) => {
    const [tag, setTag] = useState('');
    const [tagClick, setTagClick] = useState('');

    useEffect(() => {
        setTag(Tag !== undefined && Tag.category);
        return () => {};
    }, []);

    return (
        <Grid>
            <TagChip
                label={
                    <InnerBox>#어린이</InnerBox>
                }
                variant='outlined'
                color='primary'
                clickable
                onClick={tagClick}
            />
        </Grid>
    )
}

export default Tag;

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
    padding: '0 10px 0 10px',
}));

const TagChip = styled(Chip)(() => ({
    padding: '5px',
    height: '40px',
    fontSize: { xs: 1, md: 1 },
    borderColor: 'primary',
    borderRadius: 25,
    margin: '5px 5px 5px 0',
}));

const ItemStyle = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

const InnerBox = styled(Box)(() => ({
    fontSize: { xs: 13, md: 16 },
}))
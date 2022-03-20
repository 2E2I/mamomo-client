import React from 'react';
import TopAppBar from '../../components/TopAppBar';
import RoundSearchBar from '../../components/RoundSearchBar';
import TagTitle from '../../components/searchPageComponents/SearchPageTagTitle';
import Tags from '../../components/searchPageComponents/SearchPageTags';
import Tag from '../../components/searchPageComponents/Tag';

const SearchPage = () => {
    return (
        <div>
            <TopAppBar />
            <RoundSearchBar />
            <hr/>old tag design
            <TagTitle />
            <Tags />
            <hr/>new tag design
            <Tag />
        </div>
    )
};

export default SearchPage;
import React from 'react';
import TopAppBar from '../../components/TopAppBar';
import RoundSearchBar from '../../components/RoundSearchBar';
import TagTitle from '../../components/searchPageComponents/SearchPageTagTitle';
import Tags from '../../components/searchPageComponents/SearchPageTags';

const SearchPage = () => {
    return (
        <div>
            <TopAppBar />
            <RoundSearchBar />
            <TagTitle />
            <Tags />
        </div>
    )
};

export default SearchPage;
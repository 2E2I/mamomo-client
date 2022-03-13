import React from 'react';
import TopAppBar from '../../components/TopAppBar';
import RoundSearchBar from '../../components/RoundSearchBar';
import TagTitle from '../../components/SearchPageTagTitle';
import Tags from '../../components/SearchPageTags';

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
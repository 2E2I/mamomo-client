import React, { useState } from 'react';
import './Paging.css';
import Pagination from 'react-js-pagination';
import { CategoryStore } from '../store/CategoryPageStore';
import { useEffect } from 'react';

const Paging = () => {
  const { storePage, setStorePage, category, totalElements, pageSize } = CategoryStore(); //zustand
  const [page, setPage] = useState(1);
  const handlePageChange = async (page) => {
    await setPage(page);
    await console.log(page);
    await setStorePage(page - 1);
    await console.log(storePage);
  };

  useEffect(() => {
    setPage(1);
  }, [category]);

  https: return (
    <Pagination
      activePage={page}
      itemsCountPerPage={pageSize}
      totalItemsCount={totalElements}
      pageRangeDisplayed={10}
      prevPageText={'‹'}
      nextPageText={'›'}
      onChange={handlePageChange}
    />
  );
};;
export default Paging;

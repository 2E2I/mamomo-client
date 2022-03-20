import React from 'react';
import CardList from '../CardList';
import { ListStore } from '../../store/MainPageStore';
import { useEffect } from 'react';

const MainPageDonationList = () => {
  const { categories, setCategory } = ListStore();
  const menus = [1, 2, 3, 4];
  const CardLists = categories.map((category) => <CardList key={category} category={category}/>);
  useEffect(()=>{     
      setCategory(menus);
      return ()=>{        
      };
      
  }, [])

  return (
    <div>
      <div>{CardLists}</div>;
    </div>
  );
};

export default MainPageDonationList;

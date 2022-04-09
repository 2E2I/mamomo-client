import React from 'react';
import CardList from '../CardList';
import { ListStore } from '../../store/MainPageStore';
import { useEffect } from 'react';
import axios from 'axios';

const MainPageDonationList = () => {
  const { categories, setCategory } = ListStore();
  const menus = [1, 2, 3, 4];


  

  Promise.all(menus.map( async menu=>{
    return await axios
      .get(
        `http://localhost:8080/api/campaigns?page=${0}&size=5&category=${menu}&sort=due_date,ASC`,
      )
      .then((result) => {
        console.log('연결');
        console.log(Object.values(result.data)[0].content[0].category);
      })
      .catch(() => {
        console.log('연결실패');
      });
  })).then(() => {
    console.log('dd');
    
  });

  // useEffect(() => {
  
  //   setCategory(menus);
  //   return () => {};
  // }, []);

  const A = () => {
    return <CardList category={1} a={'zz'} />;
  };

  const B = () => {
    return <CardList category={2} a={'cc'} />;
  };
  const C = () => {
    return <CardList category={3} a={'aa'} />;
  };

  return (
    <div>
      {/* <A></A>
      <B></B>
      <C></C> */}
      {/* <div>{CardLists}</div>; */}
      {/* <CardList category={1} a={'aa'} />
      {console.log(111)}
      <CardList category={2} a={'bb'} />
      {console.log(222)}
      <CardList category={3} a={'cc'} />
      {console.log(333)} */}
    </div>
  );
};

export default MainPageDonationList;

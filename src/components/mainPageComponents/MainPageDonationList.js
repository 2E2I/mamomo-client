import React from 'react';
import CardList from '../CardList';
import { ListStore } from '../../store/MainPageStore';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { authHeader } from '../authenticationFunc';

const MainPageDonationList = () => {
  const { categories, setCategory } = ListStore();

  const menus = [1, 2, 3, 4, 5, 6];
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  useEffect(() => {
    if (count < menus.length) initStart(menus[count]);
  }, [count]);

  const initStart = async (data) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/campaigns?page=${0}&size=4&category=${data}&sort=due_date,ASC&heart=true`,
        {
          headers: authHeader(),
        },
      );
      setArray([...array, response.data.campaigns]);
      setCount(count + 1);
    } catch (err) {
      console.log('Error : ', err);
    }
  };
  console.log('array', array);
  const cardList = array.map((ar, index)=><><CardList category={ar} key={index}></CardList></>)

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
      {array.length == menus.length && cardList}
    </div>
  );
};

export default MainPageDonationList;

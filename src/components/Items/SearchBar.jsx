import React, { useState } from 'react';
import { Input, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './filterSlice';

const { Search } = Input;

export const SearchBar = () => {
  const searchInput = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();
  const filter = (e) => {
    dispatch(setFilter(e.target.value));
  };

  // const filter = (e) => console.log(e.target.value);

  // const filter = (e) => {
  //   const keyword = e.target.value;

  //   if (keyword !== '') {
  //     const results = USERS.filter((user) => {
  //       return user.name.toLowerCase().startsWith(keyword.toLowerCase());
  //       // Use the toLowerCase() method to make it case-insensitive
  //     });
  //     setFoundUsers(results);
  //   } else {
  //     setFoundUsers(USERS);
  //     // If the text field is empty, show all users
  //   }

  //   setName(keyword);
  // };
  // const [name, setName] = useState('');
  // // Move foundUsers to global state, updating with dispatch
  // const [foundUsers, setFoundUsers] = useState(USERS);

  return (
    <div>
      <Search
        placeholder="Search inventory"
        allowClear
        style={{ width: '40vw', margin: '1rem 0.5rem' }}
        onChange={filter}
        value={searchInput}
      />
    </div>
  );
};

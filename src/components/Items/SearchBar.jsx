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

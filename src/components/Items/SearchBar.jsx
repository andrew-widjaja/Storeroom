import React from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;

export const SearchBar = () => {
  const onSearch = (value) => console.log(value);

  return (
    <div>
      <Search
        placeholder="Search inventory"
        allowClear
        onSearch={onSearch}
        style={{ width: '40vw', margin: '1rem 0.5rem' }}
      />
    </div>
  );
};

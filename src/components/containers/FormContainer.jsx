import React from 'react';
import { SearchBar } from '../Items/SearchBar.jsx';
import AddItem from '../Items/AddItem.jsx';

const FormContainer = () => {
  return (
    <div style={{ display: 'flex' }}>
      <AddItem></AddItem>
      <SearchBar></SearchBar>
    </div>
  );
};

export default FormContainer;

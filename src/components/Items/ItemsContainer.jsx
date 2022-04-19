import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import { SearchBar } from './SearchBar.jsx';

import 'antd/dist/antd.css';
import AddItem from './AddItem.jsx';
import ItemsList from './ItemsList.jsx';

const ItemsContainer = () => {
  const Wrapper = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const StyledSpin = styled(Spin)`
    margin: 2rem;
  `;

  return (
    <Wrapper>
      <div style={{ display: 'flex' }}>
        <AddItem></AddItem>
        <SearchBar></SearchBar>
      </div>

      <ItemsList></ItemsList>
      <StyledSpin></StyledSpin>
    </Wrapper>
  );
};

export default ItemsContainer;

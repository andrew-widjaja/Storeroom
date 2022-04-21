import React from 'react';
import styled from 'styled-components';
import { Affix, Spin } from 'antd';

import 'antd/dist/antd.css';
import { SearchBar } from '../Items/SearchBar.jsx';
import AddItem from '../Modals/AddItem.jsx';
import ConsumablesList from '../Items/ConsumablesList.jsx';
import ReagentsList from '../Items/ReagentsList.jsx';
import CellLinesList from '../Items/CellLinesList.jsx';
import EquipmentList from '../Items/EquipmentList.jsx';

import { useSelector } from 'react-redux';
import DefaultPage from '../Items/DefaultPage.jsx';
// import { useGetConsumablesQuery } from '../../services/items.js';

const Wrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemsContainer = () => {
  const display = useSelector((state) => state.display.display);

  return (
    <Wrapper>
      <Affix offsetTop={0}>
        <div
          style={{
            display: 'flex',
            backgroundColor: '#f5f6fb',
            width: '80vw',
            justifyContent: 'center',
          }}>
          <AddItem></AddItem>
          <SearchBar></SearchBar>
        </div>
      </Affix>
      {display === 'default' && <DefaultPage></DefaultPage>}
      {display === 'consumables' && (
        <ConsumablesList data={undefined}></ConsumablesList>
      )}
      {display === 'reagents' && <ReagentsList data={undefined}></ReagentsList>}
      {display === 'cells' && <CellLinesList data={undefined}></CellLinesList>}
      {display === 'equipment' && (
        <EquipmentList data={undefined}></EquipmentList>
      )}
    </Wrapper>
  );
};

export default ItemsContainer;

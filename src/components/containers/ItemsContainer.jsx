import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import { SearchBar } from '../Items/SearchBar.jsx';

import 'antd/dist/antd.css';
import AddItem from '../Items/AddItem.jsx';
import ConsumablesList from '../Items/ConsumablesList.jsx';
import ReagentsList from '../Items/ReagentsList.jsx';
import CellLinesList from '../Items/CellLinesList.jsx';
import EquipmentList from '../Items/EquipmentList.jsx';

import { useSelector } from 'react-redux';
// import { useGetConsumablesQuery } from '../../services/items.js';

const Wrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSpin = styled(Spin)`
  margin: 2rem;
`;

const ItemsContainer = () => {
  const display = useSelector((state) => state.display.display);
  // const { data, error, isLoading, isSuccess, isError } =
  //   useGetConsumablesQuery();

  return (
    <Wrapper>
      <div style={{ display: 'flex' }}>
        <AddItem></AddItem>
        <SearchBar></SearchBar>
      </div>

      {/* <div>
        {isLoading && <StyledSpin></StyledSpin>}
        {isError && error.message}
        {isSuccess &&
          data &&
          data.map((item) => <div key={item._id}>{item.name}</div>)}
      </div> */}

      {display === 'consumables' && (
        <ConsumablesList data={undefined}></ConsumablesList>
      )}
      {display === 'reagents' && <ReagentsList data={undefined}></ReagentsList>}
      {display === 'cells' && <CellLinesList data={undefined}></CellLinesList>}
      {display === 'equipment' && (
        <EquipmentList data={undefined}></EquipmentList>
      )}
      {/* {display === 'default' && <StyledSpin></StyledSpin>} */}
    </Wrapper>
  );
};

export default ItemsContainer;

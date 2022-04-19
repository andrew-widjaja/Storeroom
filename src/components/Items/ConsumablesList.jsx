import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, Spin } from 'antd';

import styled from 'styled-components';

import { useGetConsumablesQuery } from '../../services/items.js';

const StyledCard = styled(Card)`
  min-width: 80%;
  height: 22vh;
  margin: 0.5rem;
  display: flex;
  color: #646464;
  line-height: 12px;
`;
const StyledSpin = styled(Spin)`
  margin: 2rem;
`;

const ConsumablesList = (props) => {
  const display = useSelector((state) => state.display.display);

  const { data, error, isLoading, isSuccess, isError } =
    useGetConsumablesQuery();

  return (
    <div
      className="site-card-border-less-wrapper"
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {isLoading && <StyledSpin></StyledSpin>}
      {isError && error.message}
      {isSuccess &&
        data &&
        data.map((item) => (
          <StyledCard
            key={item._id}
            hoverable
            // title={item.name}
            bordered={false}>
            <h3>{item.name}</h3>
            <p>
              <b>Supplier:</b> {item.supplier}
            </p>
            <p>
              <b>Description:</b> {item.description}
            </p>
            <p>
              <b>Qty:</b> {item.quantity}
            </p>

            {/* <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHaVImfSIB8rkkXVS_glNLHvFMyorwjWrV1g&usqp=CAU"
              alt="petri dish"
              style={{ height: '100%' }}
            /> */}
          </StyledCard>
        ))}
    </div>
  );
};

export default ConsumablesList;

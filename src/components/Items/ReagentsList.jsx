import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';
import StyledCard from './StyledCard.jsx';

import { useGetReagentsQuery } from '../../services/items';

const StyledSpin = styled(Spin)`
  margin: 2rem;
`;

const ReagentsList = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetReagentsQuery();

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
              <b>Catalog No.:</b> {item.catalog}
            </p>
            <p>
              <b>Description:</b> {item.description}
            </p>
            <p>
              <b>Qty:</b> {item.quantity}
            </p>
          </StyledCard>
        ))}
    </div>
  );
};

export default ReagentsList;

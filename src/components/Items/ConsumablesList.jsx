import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
const ConsumablesList = () => {
  const StyledCard = styled(Card)`
    min-width: 25%;
    height: 25vh;
    margin: 0.5rem;
  `;

  // Fetch data from MongoDB

  const item = (
    <StyledCard hoverable title="Consumables" bordered={false}>
      <p>Card content</p>
    </StyledCard>
  );

  return (
    <div
      className="site-card-border-less-wrapper"
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {item}
      {item}
      {item}
      {item}
      {item}
      {item}
      {item}
      {item}
    </div>
  );
};

export default ConsumablesList;

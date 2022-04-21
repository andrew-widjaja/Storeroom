import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;
  font-size: 1.5rem;
`;
const Image = styled.img`
  width: 14rem;
  margin: 2.5rem 0;
`;

const TechnicalChallenges = () => {
  return (
    <Wrapper>
      <Image src="https://cdn-icons-png.flaticon.com/512/6028/6028522.png" />
      <h3>Technical Challenges</h3>
      <ul>
        <li>Redux Toolkit and RTK Query</li>
        <li>UI component library</li>
        <li>OAuth for Google Sign In</li>
        <li>Extra features such as search filtering</li>
      </ul>
    </Wrapper>
  );
};

export default TechnicalChallenges;

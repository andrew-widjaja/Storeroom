import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 14rem;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;
  font-family: 'MuseoModerno', cursive;
`;

const MainText = styled.p`
  color: #525252;
  /* margin-top: 0.5rem; */
  margin-bottom: 0;
  font-size: 1.5rem;
  /* line-height: 0.5rem; */
`;
const SubText = styled.p`
  color: #676767;
  font-size: 1rem;
`;

const DefaultPage = () => {
  return (
    <Wrapper>
      {/* <Image src="https://cdn-icons-png.flaticon.com/512/7307/7307974.png" />
      <Image src="https://cdn-icons-png.flaticon.com/512/2825/2825867.png" />
      <Image src="https://cdn-icons.flaticon.com/png/512/3045/premium/3045670.png?token=exp=1650507679~hmac=a7ddb50ecbedf8e48c78380160f13cfa" /> */}
      <Image src="https://cdn-icons-png.flaticon.com/512/6552/6552495.png" />
      <MainText>welcome to your storeroom</MainText>
      <SubText>click on the side navigation to begin</SubText>
    </Wrapper>
  );
};

export default DefaultPage;

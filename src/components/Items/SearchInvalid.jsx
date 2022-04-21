import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 14rem;
  margin: 2.5rem 0;
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

const SearchInvalid = (props) => {
  return (
    <Wrapper onClick={props.filter}>
      <Image src="https://cdn-icons-png.flaticon.com/512/2855/2855060.png" />
      <MainText>Oops!</MainText>
      <SubText>No items match your search</SubText>
      {/* <button onClick={props.filter}>search again</button> */}
    </Wrapper>
  );
};

export default SearchInvalid;

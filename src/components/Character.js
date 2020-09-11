import React from "react"; // Write your Character component here
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${(pr) => pr.theme.black};
  color: ${(pr) => pr.theme.white};
  padding: ${(pr) => pr.theme.paddingSize};
  margin: ${(pr) => pr.theme.marginSize} auto;
  opacity: 50%;
  width: 80%;
  border-radius: 10px;
  h2 {
    color: ${(pr) => pr.theme.blue};
    font-style: italic;
  }
`;

const Character = ({ chars }) => {
  console.log(chars);

  return (
    <>
      {chars.map((char, index) => (
        <StyledDiv key={index}>
          <h2>{char.name}</h2>
          <p>Gender: {char.gender}</p>
          <p>Height: {char.height}</p>
          <p>Mass: {char.mass}</p>
        </StyledDiv>
      ))}
    </>
  );
};
export default Character;

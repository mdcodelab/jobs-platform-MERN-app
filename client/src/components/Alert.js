import React from 'react';
import styled from "styled-components";

function Alert() {
  return (
    <Wrapper className="alert alert-danger">
      alert goes here
    </Wrapper>
  );
}

const Wrapper = styled.div`
text-align: center;
`;


export default Alert;

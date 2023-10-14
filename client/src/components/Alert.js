import React from 'react';
import styled from "styled-components";
import { useAppContext } from '../context/appContext';

function Alert() {
    const {alertText, alertType}=useAppContext();

  return (
    <Wrapper className={`alert alert-${alertType}`}>
      {alertText}
    </Wrapper>
  );
}


const Wrapper = styled.div`
text-align: center;
`;


export default Alert;

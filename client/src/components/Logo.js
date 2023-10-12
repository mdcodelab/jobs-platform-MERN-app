import React from 'react';
import styled from "styled-components";
import logo from "../assets/images/logo.png";

function Logo() {
  return (
    <Wrapper className="logo__content">
      <img src={logo} alt="work wave hub" className="logo"></img>
      <h4>Work Wave Hub</h4>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    width: 10rem;
    height: 6rem;
    display: flex;
    height: 100%;
    width: 16rem;
    align-items: center;
    justify-content: space-between;

  img {
    width: 3rem;
    height: 3rem;
  }

  h4 {
    color: var(--primary-500);
    margin: 0;
    font-weight: bold;
  }
`;

export default Logo;

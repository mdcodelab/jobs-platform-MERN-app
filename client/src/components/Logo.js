import React from 'react';
import styled from "styled-components";
import logo from "../assets/images/logo.png";

function Logo() {
  return (
    <Wrapper>
      <div className="logo__content">
        <img src={logo} alt="work wave hub" className="logo"></img>
        <h4>Work Wave Hub</h4>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
width: 100%;

  .logo__content {
    width: 10rem;
    height: 3rem;
    display: flex;
    align-items: center;
    height: 100%;
    width: 16rem;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }

  .logo__content img {
    width: 3rem;
    height: 3rem;
  }

  .logo__content h4 {
    color: var(--primary-500);
    margin: 0;
    font-weight: bold;
  }
`;

export default Logo;

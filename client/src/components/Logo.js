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

  .logo__content {
    height: 3rem;
    display: flex;
    align-items: center;
    height: 100%;
    width: 16rem;
    justify-content: space-between;
    margin: 0 auto;
  }

  .logo__content img {
    width: 2.5rem;
    height: 2.5rem;
    display: block;
    margin-right: 1rem;
  }

  .logo__content h4 {
    color: var(--primary-500);
    margin: 0;
    font-weight: bold;
  }
`;

export default Logo;

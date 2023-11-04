import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png"

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
    display: flex;
    align-items: center;
    height: 100%;
    width: 10rem;
    justify-content: space-between;
    margin: 0 auto;
  }

  .logo__content img {
    width: 1.5rem;
    height: 1.5rem;
    display: block;
  }

  .logo__content h4 {
    color: var(--primary-500);
    margin: 0;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export default Logo;

import React from 'react';
import frog from "../assets/images/frog.jpg";
import styled from "styled-components";
import {Link} from "react-router-dom";

function Error() {
  return (
    <Wrapper>
      <div className="content">
        <h1>404</h1>
        <h4>...Oooops! Page not fund!</h4>
        <img src={frog} alt="cannot found"></img>
        <Link to="/home" className="btn btn-hero">Back Home</Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main `
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
margin: 0; padding: 0;

.content {
    width: 30rem;
    height: 30rem;
}

img {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
}

.content h1 {
    font-size: 3.5rem;
    text-align: center;
    margin: 0;
    color: var(--green-dark);
    font-weight: bold;
}

.content h4 {
    text-align: center;
    text-transform: none;
    margin: 0;
    color: var(--green-dark);
}

.content a {
    display: block;
    margin: 0 auto;
    text-align: center;
    width: 10rem;
}
;`;

export default Error;

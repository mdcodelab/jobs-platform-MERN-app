import React from 'react';
import {Outlet, Link} from "react-router-dom";
import styled from "styled-components";

function SharedLayout() {
  return (
    <Wrapper>
      <nav>
        <Link to="add-job">Add Job</Link>
        <Link to="all-jobs">All Jobs</Link>
      </nav>
      <Outlet></Outlet>
    </Wrapper>
  );
}

const Wrapper = styled.div`

`;

export default SharedLayout;

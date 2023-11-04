import React from 'react';
import styled from "styled-components";
import { FcHome } from "react-icons/fc";
import { useAppContext } from '../../context/appContext';
import {AiOutlineAlignLeft} from "react-icons/ai";
import {FaUserCircle} from "react-icons/fa";
import {FaCaretDown} from "react-icons/fa";
import Logo_dashboard from "../dashboard_components/Logo_dashboard"

function Navbar() {
  return (
    <Wrapper>
      <div className="nav center">
        <button className="toggle-btn">
          <AiOutlineAlignLeft></AiOutlineAlignLeft>
        </button>
      </div>

      <div className="logo__dashboard">
        <Logo_dashboard></Logo_dashboard>
        <h3 className="logo-text">Dashboard</h3>
      </div>

      <div className="btn-container">
        <button className="btn">
          <FaUserCircle></FaUserCircle>
          John
          <FaCaretDown></FaCaretDown>
        </button>
        <div className="dropdown show-dropdown">
            <button className="dropdown-btn">Logout</button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: var(--white);
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
    height: 2rem;
  }
  .logo-text {
    display: none;
    margin: 0;
  }

  .logo__dashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: max-content;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
      letter-spacing: 0.35rem;
      font-size: 2rem;
      margin-top: 1rem;
    }
  }
`

export default Navbar;

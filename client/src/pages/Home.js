import React from "react";
import logo from "../assets/images/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

function Home() {
  return (
    <Wrapper>
      <nav>
        <div className="nav-content">
          <img src={logo} alt="work wave hub" className="logo"></img>
          <h4>Work Wave Hub</h4>
        </div>
      </nav>
      <div className="container">
        <video className="video" autoPlay muted playsInline loop>
          <source src="assets/video.mp4" type="video/mp4"></source>
        </video>
        <div className="cover">
          <h1>
            Job <span>tracking</span> platform
          </h1>
          <p>
            This job platform is tailored to meet the demands of modern
            professionals and businesses alike. Whether you're an individual
            seeking your next career opportunity or an organization striving to
            find the best talent, our platform bridges the gap, offering a
            seamless, intuitive experience. Dive into a vast pool of
            opportunities, connect with like-minded professionals, and usher in
            a new era of work, all at your fingertips!
          </p>
          <Link className="btn btn-hero" to="/register">
            Login/Register
          </Link>
        </div>
      </div>
      <div className="footer">
        <div className="copyright">
          <p className="copyright__footer">
            &copy; {new Date().getFullYear()} <span>W</span>
            <span> Work Wave Hub</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  max-width: var(--max-width);
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background: var(--primary-900);

  nav {
    width: 100%;
    height: 6rem;
  }

  .nav-content {
    display: flex;
    height: 100%;
    width: 16rem;
    align-items: center;
    justify-content: space-between;
  }

  nav img {
    width: 4rem;
    height: 4rem;
  }

  nav h4 {
    color: var(--primary-500);
    margin: 0;
    font-weight: bold;
  }

  .container {
    width: 100%;
    height: calc(100vh - 11rem);
  }

  .video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  .cover {
    position: absolute;
    top: 5rem;
    z-index: 10;
    height: calc(100vh - 11rem);
    width: 100%;
    background: rgba(0,0,0,0.5);
  }

  //
  .footer {
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-500);
  }
`;

export default Home;

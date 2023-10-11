import React from "react";
import img5 from "../assets/images//img5.jpeg";
import logo from "../assets/images/logo.png"
import styled from "styled-components";

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
        <div className="info">
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
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <div className="info__image">
          <img src={img5} alt="we aer waiting for you!"></img>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  max-width: var(--max-width);
  height: 100vh;
  margin: 0 auto;

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
    width: 4.5rem;
    height: 4.5rem;
  }

  nav h4 {
    color: var(--primary-500);
    margin: 0;
    font-weight: bold;
  }

  .container {
    display: flex;
    height: calc(100vh - 6rem);
    justify-content: space-between;
    margin-top: 2rem;
  }

  .info,
  .info__image {
    flex: 1;
  }

  .info h1 {
    font-weight: bold;
  }

  .info span {
    color: var(--primary-500);
  }

  .info p {
    width: 90%;
  }

  .info__image img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    box-shadow: var(--shadow-1);
  }

  @media (max-width: 992px) {
.container {
    flex-direction: column;
}

.info p {
    text-align: center;
}

.btn-hero {
    margin-bottom: 2rem;
}

.info__image {
    display: none;
}
  }
`;


export default Home;

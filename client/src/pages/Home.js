import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Wrapper>
      <nav>
        <div
          className="nav-content"
          data-aos="slide-right"
          data-aos-duration="1500"
        >
          <h2 className="logo">W</h2>
          <h4>Work Wave Hub</h4>
        </div>
      </nav>
      <div className="container">
        <video className="video" autoPlay muted playsInline loop preload="auto">
          <source src="assets/video.mp4" type="video/mp4"></source>
        </video>
        <div className="cover">
          <div className="cover__content">
            <h1 data-aos="slide-down" data-aos-duration="2500">
              Job <span>Tracking</span> Platform
            </h1>
            <p data-aos="fade" data-aos-duration="1500">
              This job platform is tailored to meet the demands of modern
              professionals and businesses alike. Whether you're an individual
              seeking your next career opportunity or an organization striving
              to find the best talent, our platform bridges the gap, offering a
              seamless, intuitive experience. Dive into a vast pool of
              opportunities, connect with like-minded professionals, and usher
              in a new era of work, all at your fingertips!
            </p>
            <Link
              className="btn btn-hero"
              to="/register"
              data-aos-duration="2000"
            >
              Login/Register
            </Link>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="copyright">
          <p className="footer__info">
            <span className="date">&copy; {new Date().getFullYear()}</span>
            <span className="logo__full">
              <span className="logo__letter">W</span>
              <span className="logo__name"> Work Wave Hub.</span>
            </span>
            All Rights Reserved.
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
  overflow-y: hidden;

  nav {
    width: 100%;
    height: 6rem;
  }

  .nav-content {
    display: flex;
    height: 100%;
    width: 10rem;
    align-items: center;
    justify-content: space-between;
    width: 14.5rem;
    height: 100%;
  }

  .logo {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: var(--primary-500);
    margin: 0;
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
    border-radius: 0.5rem;
    margin: 0 auto;
  }

  .cover {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    height: calc(100vh - 11rem);
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cover__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .cover__content h1 {
    text-align: center;
    margin: 0;
    color: #fff;
    font-size: 3rem;
    text-shadow: 0 1px 3px white;
    margin-bottom: 3rem;
  }

  .cover__content h1 span {
    color: var(--primary-500);
  }

  .cover__content a {
    display: block;
    margin: 0 auto;
    width: max-content;
    margin-top: 2.5rem;

    animation: appear 2.5s ease;
  }

  @keyframes appear {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  .cover__content p {
    color: #fff;
    margin: 0;
    padding: 0;
  }

  //
  .footer {
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding-top: 2rem;
    font-size: 0.8rem;
  }

  .footer__info {
    width: 22rem;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo__full {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 7.15rem;
  }

  .logo__letter {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary-400);
  }

  .logo__name {
    color: var(--primary-400);
  }

  @media screen and (max-width: 362px) {
    .footer {
      padding-top: 1rem;
    }
    .footer__info {
      flex-direction: column;
      height: max-content;
      line-height: 1.2rem;
    }
    .footer__info span {
      margin: 0;
      padding: 0;
    }
  }

    @media screen and (max-width: 560px) {
      .cover__content {
        padding: 1rem 0;
      }
      .cover__content h1 {
        font-size: 2rem;
      }
    }

    @media screen and (max-width: 419px) {
      .cover__content p {
        line-height: 1.5rem;
      }
      .cover__content h1 {
        margin-bottom: 2.5rem;
      }
    }

    @media (max-width: 303px) {
      .cover__content h1 {
        font-size: 1.8rem;
      }
    }

`;

export default Home;

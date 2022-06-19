import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [scroll, setScoll] = useState(false);
  const toggleButton = () => {
    if (window.pageYOffset > 50) {
      setScoll(true);
    } else {
      setScoll(false);
    }
  };
  const scroollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleButton);
    return () => {
      window.removeEventListener('scroll', toggleButton);
    };
  }, []);
  return (
    <Div>
      {scroll && (
        <button onClick={scroollToTop} className='top-btn'>
          <FaChevronUp
            size={20}
            style={{ color: '#fff', fontWeight: 'bolder' }}
          />
        </button>
      )}
    </Div>
  );
}
const Div = styled.div`
  max-width: 100vw;

  .top-btn {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color: var(--blue);
    padding: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in-out;
    z-index: 25;
    border: none;
    cursor: pointer;
    svg {
      color: white;
      font-size: 1.3rem;
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
      left: 75vw;
      right: initial;
    }
  }
`;

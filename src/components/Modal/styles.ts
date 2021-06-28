import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  position: fixed;
  display: flex;

  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.6);

  height: 100vh;
  width: 100%;

  z-index: 3;
`;

export const Background = styled.div`
  position: fixed;

  height: 100vh;
  width: 100%;
  z-index: 3;
`;

export const Content = styled(motion.div)`
  display: flex;
  position: relative;
  flex-direction: column;

  align-items: center;
  z-index: 4;

  width: 48rem;
  height: 25rem;
  padding: 2.5rem 4rem 1rem;

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.primary};

  strong {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  p {
    letter-spacing: 0.1em;
    text-align: justify;
    font-size: 1.10rem;
    overflow: auto;
  }

  button {
    position: absolute;
    display: flex;

    top: 8px;
    right: 8px;

    border: none;
    background: transparent;
    cursor: pointer;
  }
`;

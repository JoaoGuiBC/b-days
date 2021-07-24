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

  width: 25rem;
  height: 20rem;
  padding: 2.5rem 4rem 0;

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

  button:first-child {
    position: absolute;
    display: flex;

    top: 8px;
    right: 8px;

    border: none;
    background: transparent;
    cursor: pointer;
  }
`;

export const NameInput = styled.div`
  display: flex;
  flex-direction: column;

  width: 15rem;
  margin-bottom: 2rem;

  span {
    font-weight: 500;
    font-size: 0.75rem;
  }

  input {
    padding: 0.5rem;
    letter-spacing: 0.1rem;

    border: solid 1px ${({ theme }) => theme.colors.secondary};
    border-radius: 8px;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 0.75rem;

  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondary};

  color: ${({ theme }) => theme.colors.primary};

  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const ImageInput = styled.div`
  margin-bottom: 3rem;
  padding: 1rem;

  label {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    padding: 1rem;
    border-radius: 8px;

    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: opacity(0.8);
    }
  }

  input {
    display: none;
    opacity: 0;
  }
`;
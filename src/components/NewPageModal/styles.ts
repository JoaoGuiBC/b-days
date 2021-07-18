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
  justify-content: space-between;
  z-index: 4;

  width: 35rem;
  height: 35rem;
  padding: 2rem 4rem;

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.strong`
  font-weight: 500;
  font-size: 2.25rem;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  span {
    font-size: 0.75rem;
    font-weight: 500;
  }

  input {
    height: 3rem;
    width: 22rem;

    background: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;

    padding: 0 0.5rem;
  }
`;

export const ContentSelector = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  span {
    margin-bottom: 1.5rem;
    align-self: center;
  }

  div {
    display: flex;
    align-items: center;
    margin-left: 3rem;

    input {
      height: 1rem;
      width: 1rem;

      margin-right: 0.5rem;
    }
  }
`;

export const Button = styled(motion.button)`
  display: flex;

  height: 4rem;

  justify-content: center;
  align-items: center;
  font-size: 1.125rem;

  border-radius: 8px;
  border: solid 2px ${({ theme }) => theme.colors.secondary};

  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.lightText};
  cursor: pointer;

  font-weight: 700;
`;

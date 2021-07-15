import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  padding: 3rem 0;

  width: 100%;
  height: 100vh;
`;

export const Title = styled.span`
  font-size: 4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkText};

  strong {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const NewPageButton = styled.button`
  display: flex;

  width: 25rem;
  height: 4rem;

  justify-content: center;
  align-items: center;
  font-size: 1.125rem;

  border-radius: 8px;
  border: solid 2px #A8A8B3;

  background: transparent;
  cursor: pointer;

  transition: color 0.4s, background 0.4s;

  img {
    margin-right: 0.5rem;
    height: 1.25rem;
  }

  &:hover {
    background: #A8A8B3;
    color: ${({ theme }) => theme.colors.primary}
  }
`;

export const Separator = styled.div`
  font-size: 400;
  color: #A8A8B3;

  text-align: center;
  position: relative;

  margin: 3rem 0;

  &::before {
    content: '';
    width: 11.2rem;
    background: #A8A8B3;
    height: 2px;
    position: absolute;
    right: 2rem;
    top: 49%;
  }
  &::after {
    content: '';
    width: 11.2rem;
    background: #A8A8B3;
    height: 2px;
    position: absolute;
    left: 2rem;
    top: 49%;
  }
`;

export const Button = styled(motion.button)`
  display: flex;

  width: 25rem;
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
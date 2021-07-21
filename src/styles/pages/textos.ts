import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 3rem 3.5rem;

  max-width: 100vw;
`;

export const Text = styled.p`
  letter-spacing: 0.1em;
  text-align: center;

  margin: 1rem 0 2.5rem 0;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  gap: 5rem 2.5rem;
`;

export const AddTextButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3rem;
  height: 3rem;

  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};

  position: fixed;
  right: 16px;
  bottom: 16px;

  cursor: pointer;

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

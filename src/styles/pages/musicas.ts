import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  max-width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  gap: 1px;

  overflow-y: auto;

  iframe {
    flex: 1 0 40%;
    min-height: 100%;

    border: none;
  }
`;

export const AddMusicButton = styled(motion.button)`
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
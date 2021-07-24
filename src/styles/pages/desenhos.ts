import { motion } from 'framer-motion';
import styled from 'styled-components';

interface BackgroundProps {
  Image: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  max-width: 100vw;
`;

export const Text = styled.p`
  letter-spacing: 0.1em;
  text-align: center;
  padding: 1.5rem 3.5rem;

  margin: 1rem 0 2.5rem 0;
`;

export const Images = styled.div`
  width: 100%;
  height: 100vh;

  & + & > div:first-child {
    filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.7));
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 0.5rem;

  background: ${({ theme }) => theme.colors.secondary};
  filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.4));
`;

export const Background = styled.div<BackgroundProps>`
  display: flex;
  align-items: center;

  background-image: url(${({ Image }) => Image});

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  width: 100%;
  height: 100vh;
`;

export const ArtistInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;

  width: 15rem;

  padding: 0.5rem 0.75rem;
  border-radius: 0 5px 5px 0;

  color: ${({ theme }) => theme.colors.lightText};
  background: ${({ theme }) => theme.colors.secondary};
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.8));

  span {
    font-size: 0.75rem;
  }

  strong {
    font-size: 1.5rem;
  }

  a {
    display: flex;

    margin-top: 1.25rem;
    font-size: 0.75rem;
    cursor: pointer;
    width: min-content;
    color: ${({ theme }) => theme.colors.lightText};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  a svg {
    height: 1rem;
    margin-left: 4px;
  }
`;

export const Footer = styled.div`
  display: flex;

  width: 100%;
  height: 4rem;

  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.lightText};
  font-size: 1rem;
  letter-spacing: 0.1em;

  background: ${({ theme }) => theme.colors.secondary};
  filter: drop-shadow(0px -8px 4px rgba(0, 0, 0, 0.4));

  border-radius: 10px 10px 0 0;

  z-index: 3;

  span {
    display: flex;
    align-items: center;

    height: 100%;
    margin-right: 8px;
    cursor: pointer;
    user-select: none;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(2);
    }
  }
`;

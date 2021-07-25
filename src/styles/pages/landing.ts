import { motion } from 'framer-motion';
import styled from 'styled-components';

interface BackgroundImgProps {
  src: string;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

export const WelcomeContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;

  border-radius: 0 10px 10px 0;

  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

export const BackgroundImg = styled.div<BackgroundImgProps>`
  position: absolute;

  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-image: url(${({ src }) => src});

  background-position: cover;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(8px);

  border-radius: 0 10px 10px 0;
`;

export const Texts = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.lightText};

  background: rgba(43, 0, 97, 0.5);
  border-radius: 0 10px 10px 0;

  z-index: 2;

  h1 {
    margin-bottom: 3rem;
  }

  strong {
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
  }

  p {
    max-width: 25rem;
    font-size: 1.25rem;
    text-align: center;
    letter-spacing: 0.25rem;
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

export const MenuContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 7rem 0;

  background: ${({ theme }) => theme.colors.background};

  span {
    font-size: 1.25rem;
    margin-bottom: 4rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-bottom: 4rem;
  gap: 2rem;
  
  width: 20rem;
  justify-content: center;
`;

export const MusicButton = styled(motion.div)`
  display: flex;

  width: 20rem;
  height: 4rem;

  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.4);

  p {
    flex: 1;
    display: flex;

    justify-content: center;
    align-items: center;

    text-decoration: none;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.colors.darkText};
    border-left: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  img {
    padding: 0.5rem .75rem;
  }
`;

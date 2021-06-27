import styled from 'styled-components';

import img from '../../../public/personPhoto.png';

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

export const BackgroundImg = styled.div`
  position: absolute;

  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-image: url(${img});

  background-position: cover;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(4px);

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
    max-width: 20rem;
    font-size: 1.25rem;
    text-align: center;
    letter-spacing: 0.25rem;
  }
`;

export const ButtonsContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  flex: 1;
`;
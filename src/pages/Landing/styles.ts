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
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

export const MenuContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 7rem 0;

  background: ${({ theme }) => theme.colors.background};

  span {
    font-size: 1.25rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  
  width: 20rem;
  justify-content: space-between;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 9rem;
  height: 11rem;

  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.4);

  p {
    text-align: center;
    letter-spacing: 0.1rem;
    padding: 0.25rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  a {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    max-height: 8rem;
  }
`

export const MusicButton = styled.div`
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
    color: ${({ theme }) => theme.colors.darkText}
  }

  img {
    padding: 0.5rem .75rem;
    border-right: 1px solid ${({ theme }) => theme.colors.secondary}
  }
`;

// export const ImageContainer = styled.button`
//   flex: 1;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   height: 8rem;

//   background: transparent;
//   border: none;

//   cursor: pointer;
// `;

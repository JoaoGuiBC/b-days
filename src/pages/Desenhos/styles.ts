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

  & + & > div:first-child {
    border-radius: 10px;
    filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.7));
  }
`;

export const ArtistName = styled.div`
  display: flex;

  width: 100%;
  height: 7rem;

  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.lightText};
  font-size: 4.5rem;
  letter-spacing: 0.1em;

  background: ${({ theme }) => theme.colors.secondary};
  filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.4));

  border-radius: 0px 0px 10px 10px;

  z-index: 3;
`;

export const Background = styled.div<BackgroundProps>`
  background-image: url(${({ Image }) => Image});

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  border-radius: 10px;

  width: 100%;
  height: 100vh;
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

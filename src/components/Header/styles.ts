import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;

  width: 100vw;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;


  background: ${({ theme }) => theme.colors.primary};

  a {
    display: flex;
  }
`;

export const Title = styled.div`
  display: flex;
  position: absolute;

  width: 210px;
  justify-content: center;
  gap: 8px;

  margin: 0 auto;
  left: 0;
  right: 0;

  span {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0.1em;
  }

  div {
    align-self: center;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
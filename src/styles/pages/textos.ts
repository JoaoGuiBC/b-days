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

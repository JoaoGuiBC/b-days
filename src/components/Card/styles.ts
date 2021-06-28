import styled from 'styled-components';

interface CardProps {
  isIcon: boolean
}

export const Container = styled.div<CardProps>`
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
    height: 100%;
    width: 100%;
    display:block;
    border-radius: 0 0 10px 10px;

    ${({ isIcon }) => isIcon ? 'padding: 16px' : ''}
  }
`

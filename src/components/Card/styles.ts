import { motion } from 'framer-motion';
import styled from 'styled-components';

interface CardProps {
  isIcon: boolean;
  src: string;
}

export const Container = styled(motion.div) <CardProps>`
  display: flex;
  flex-direction: column;
  
  width: ${({ isIcon }) => isIcon ? '9rem' : '8rem'};
  height: ${({ isIcon }) => isIcon ? '11rem' : '10rem'};

  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};

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
    ${({ isIcon }) => !isIcon ? 'cursor: pointer' : ''};
  }

  div {
    flex: 1;
    display:block;
    border-radius: 0 0 10px 10px;

    background-image: url(${({ src }) => src});
    background-repeat: no-repeat;
    background-size: cover;
    
    ${({ isIcon }) => isIcon ? 'padding: 16px' : ''}
    ${({ isIcon }) => !isIcon ? 'cursor: pointer' : ''};
  }
`

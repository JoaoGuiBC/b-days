import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Card } from '../../components/Card';

import {
  Container,
  WelcomeContainer,
  BackgroundImg,
  Texts,
  MenuContainer,
  ButtonsContainer,
  MusicButton,
} from './styles';

export const Landing: React.FC = () => {
  const [animationDelay, setAnimationDelay] = useState(0.2);
  const [animationDuration, setAnimationDuration] = useState(0.75);

  const changeAnimationValues = useCallback(() => {
    setAnimationDelay(0);
    setAnimationDuration(0.2);
  }, [setAnimationDelay, setAnimationDuration]);

  return (
    <Container>
      <WelcomeContainer>
        <BackgroundImg />
        <Texts>
          <h1>-HAPPY B-DAY-</h1>
          <strong>Feito com carinho por:</strong>
          <p>Pessoa 1, Pessoa 2, Pessoa 3, Pessoa 4, Pessoa 5, Pessoa 6, Pessoa 7, Pessoa 8, Pessoa 9, Pessoa 10</p>
        </Texts>
      </WelcomeContainer>

      <MenuContainer>
        <span>Comece escolhendo uma categoria</span>

        <ButtonsContainer>

          <Card
            title="Textos"
            altText="Botão para ir para a página de textos"
            image="/pencilIcon.png"
            isIcon
            initialDelay={0.2}
          />
          <Card
            title="Desenhos"
            altText="Botão para ir para a página de desenhos"
            image="/paintIcon.png"
            isIcon
            initialDelay={0.2}
          />

        </ButtonsContainer>

        <Link href="/Musicas">
          <a>
            <MusicButton
              initial={{ opacity: 0, y: -15, boxShadow: "1px 20px 4px rgba(0, 0, 0, 0.1)" }}
              animate={{ opacity: 1, y: 0, boxShadow: '1px 4px 4px rgba(0, 0, 0, 0.4)', }}
              onAnimationComplete={changeAnimationValues}
              whileHover={{ scale: 1.05, y: -9, boxShadow: "1px 14px 4px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.75, y: 0, boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)" }}
              transition={{ duration: animationDuration, bounce: 1, delay: animationDelay }}
            >
              <motion.img
                src="/spotifyLogoIcon.png"
                alt="Botão para ir para a página de músicas"
                layoutId="Musicas"
              />
              <p>Musiquinhas</p>
            </MusicButton>
          </a>
        </Link>
      </MenuContainer>
    </Container>
  );
}
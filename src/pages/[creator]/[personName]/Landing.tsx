import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Card } from '../../../components/Card';

import { useAuth } from '../../../hooks/useAuth';
import { database } from '../../../services/firebase';

import {
  Container,
  WelcomeContainer,
  BackgroundImg,
  Texts,
  MenuContainer,
  ButtonsContainer,
  MusicButton,
} from '../../../styles/pages/landing';
import { GetStaticPaths, GetStaticProps } from 'next';

interface LandingProps {
  selectedPages: {
    drawsPage: boolean;
    musicsPage: boolean;
    textsPage: boolean;
  }
}

const Landing: React.FC<LandingProps> = ({ selectedPages }) => {
  const [animationDelay, setAnimationDelay] = useState(0.2);
  const [animationDuration, setAnimationDuration] = useState(0.75);

  const router = useRouter();

  const { creator, personName } = router.query;

  const changeAnimationValues = () => {
    setAnimationDelay(0);
    setAnimationDuration(0.2);
  }

  return (
    <Container>
      <WelcomeContainer>
        <BackgroundImg />
        <Texts>
          <h1>-HAPPY {String(personName).toUpperCase()} B-DAY-</h1>
          <strong>Feito com carinho por:</strong>
          <p>Pessoa 1, Pessoa 2, Pessoa 3, Pessoa 4, Pessoa 5, Pessoa 6, Pessoa 7, Pessoa 8, Pessoa 9, Pessoa 10</p>
        </Texts>
      </WelcomeContainer>

      <MenuContainer>
        <span>Comece escolhendo uma categoria</span>

        <ButtonsContainer>

          {selectedPages.textsPage && (
            <Card
              title="Textos"
              altText="Botão para ir para a página de textos"
              image="/pencilIcon.png"
              isIcon
              link={`/${creator}/${personName}/Textos`}
              initialDelay={0.2}
            />
          )}

          {selectedPages.drawsPage && (
            <Card
              title="Desenhos"
              altText="Botão para ir para a página de desenhos"
              image="/paintIcon.png"
              isIcon
              link={`/${creator}/${personName}/Desenhos`}
              initialDelay={0.2}
            />
          )}

        </ButtonsContainer>

        {selectedPages.musicsPage && (
          <Link href={`/${creator}/${personName}/Textos`}>
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
        )}
      </MenuContainer>
    </Container>
  );
}

export default Landing;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { creator, personName } = params;

  const pageRef = database.ref(`/${creator}/pages/${personName}`);
  const selectedPages = await pageRef.once('value').then(page => {
    return {
      drawsPage: page.val().drawsPage,
      musicsPage: page.val().musicsPage,
      textsPage: page.val().textsPage,
    }
  });

  return {
    props: {
      selectedPages
    }
  }
}
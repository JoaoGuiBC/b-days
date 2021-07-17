import { useViewportScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { Header } from "../components/Header";

import {
  Container,
  Text,
  Images,
  Separator,
  Background,
  ArtistInfo,
  Footer,
} from '../styles/pages/desenhos';

const drawings = [{ id: 1, author: 'Pessoa 1', src: '/placeholderImage.png' }, { id: 2, author: 'Pessoa 2', src: '/placeholderImage2.png' }, { id: 3, author: 'Pessoa 3', src: '/placeholderImage.png' }, { id: 4, author: 'Pessoa 4', src: '/placeholderImage2.png' }, { id: 5, author: 'Pessoa 5', src: '/placeholderImage.png' }, { id: 6, author: 'Pessoa 6', src: '/placeholderImage2.png' }, { id: 7, author: 'Pessoa 7', src: '/placeholderImage.png' }, { id: 8, author: 'Pessoa 8', src: '/placeholderImage2.png' }];

const Desenhos: React.FC = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const { scrollYProgress } = useViewportScroll();

  scrollYProgress.onChange(() => setScrollHeight(scrollYProgress.get() * 100));

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function animateArtistInfo(artistInfoId: number) {
    const screenPercentage = 100 / drawings.length;

    if (scrollHeight > (screenPercentage * artistInfoId) - 9
      && scrollHeight < (screenPercentage * (artistInfoId + 1)) - 9) {
      return 0
    }

    return '-100%'
  }

  return (
    <>
      <Header title="Desenhos" />
      <Container>
        <Text>
          Parva details de perfectum est fecit
        </Text>

        {drawings.map(draw => (
          <Images key={draw.id}>
            <Separator />
            <Background Image={draw.src}>
              <ArtistInfo
                initial={{ x: '-100%' }}
                animate={{ x: animateArtistInfo(draw.id) }}
                transition={{ duration: 0.2 }}
              >
                <span>Feito por:</span>
                <strong>{draw.author}</strong>
                <a href={draw.src} download={`${draw.author}.png`}>
                  Download
                  <img src="/svg/download.svg" alt="Download" />
                </a>
              </ArtistInfo>
            </Background>
          </Images>
        ))}

        <Footer>
          <span onClick={handleScrollToTop}>Voltar ao início</span>
          <Image src="/svg/chevronUp.svg" height={16} width={16} />
        </Footer>
      </Container>
    </>
  );
}

export default Desenhos;
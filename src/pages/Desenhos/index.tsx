import Image from "next/image";
import { Header } from "../../components/Header";

import {
  Container,
  Text,
  Images,
  Separator,
  Background,
  ArtistInfo,
  Footer,
} from './styles';

const drawings = [{ id: 1, author: 'Pessoa 1', src: '/placeholderImage.png' }, { id: 2, author: 'Pessoa 2', src: '/placeholderImage2.png' }, { id: 3, author: 'Pessoa 3', src: '/placeholderImage.png' }, { id: 4, author: 'Pessoa 4', src: '/placeholderImage2.png' }];

const Desenhos: React.FC = () => {
  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <Header title="Desenhos" />
      <Container>
        <Text>
          Este espaço foi criado para demonstrar o quanto você é querida e
          especial para todos nós :&#41;
        </Text>

        {drawings.map(draw => (
          <Images key={draw.id}>
            <Separator />
            <Background Image={draw.src}>
              <ArtistInfo>
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
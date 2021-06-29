import Image from "next/image";
import { Header } from "../../components/Header";

import {
  Container,
  Text,
  Images,
  ArtistName,
  Background,
  Footer,
} from './styles';

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

        <Images>
          <ArtistName>
            <strong>Fulano</strong>
            <a href="/placeholderImage.png" download="draw.png">
              <Image src="/svg/download.svg" height={32} width={32} />
            </a>
          </ArtistName>
          <Background Image="/placeholderImage.png" />
        </Images>

        <Images>
          <ArtistName>
            <strong>Fulano</strong>
            <a href="/placeholderImage2.png" download="draw.png">
              <Image src="/svg/download.svg" height={32} width={32} />
            </a>
          </ArtistName>
          <Background Image="/placeholderImage2.png" />
        </Images>

        <Images>
          <ArtistName className="artistName">
            <strong>Fulano</strong>
            <a href="/placeholderImage.png" download="draw.png">
              <Image src="/svg/download.svg" height={32} width={32} />
            </a>
          </ArtistName>
          <Background Image="/placeholderImage.png" />
        </Images>

        <Images>
          <ArtistName>
            <strong>Fulano</strong>
            <a href="/placeholderImage2.png" download="draw.png">
              <Image src="/svg/download.svg" height={32} width={32} />
            </a>
          </ArtistName>
          <Background Image="/placeholderImage2.png" />
        </Images>

        <Footer>
          <span onClick={handleScrollToTop}>Voltar ao início</span>
          <Image src="/svg/chevronUp.svg" height={16} width={16} />
        </Footer>
      </Container>
    </>
  );
}

export default Desenhos;
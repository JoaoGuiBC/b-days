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
          <Separator />
          <Background Image="/placeholderImage.png">
            <ArtistInfo>
              <span>Feito por:</span>
              <strong>Fulano</strong>
              <a href="/placeholderImage.png" download="draw.png">
                Download
                <img src="/svg/download.svg" alt="Download" />
              </a>
            </ArtistInfo>
          </Background>
        </Images>

        <Images>
          <Separator />
          <Background Image="/placeholderImage2.png">
            <ArtistInfo>
              <span>Feito por:</span>
              <strong>Fulano</strong>
              <a href="/placeholderImage2.png" download="draw.png">
                Download
                <img src="/svg/download.svg" alt="Download" />
              </a>
            </ArtistInfo>
          </Background>
        </Images>

        <Images>
          <Separator />
          <Background Image="/placeholderImage.png">
            <ArtistInfo>
              <span>Feito por:</span>
              <strong>Fulano</strong>
              <a href="/placeholderImage.png" download="draw.png">
                Download
                <img src="/svg/download.svg" alt="Download" />
              </a>
            </ArtistInfo>
          </Background>
        </Images>

        <Images>
          <Separator />
          <Background Image="/placeholderImage2.png">
            <ArtistInfo>
              <span>Feito por:</span>
              <strong>Fulano</strong>
              <a href="/placeholderImage2.png" download="draw.png">
                Download
                <img src="/svg/download.svg" alt="Download" />
              </a>
            </ArtistInfo>
          </Background>
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
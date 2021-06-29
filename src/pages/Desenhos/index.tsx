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
          </ArtistName>
          <Background Image="/placeholderImage.png" />
        </Images>

        <Images>
          <ArtistName>
            <strong>Fulano</strong>
          </ArtistName>
          <Background Image="/placeholderImage2.png" />
        </Images>

        <Images>
          <ArtistName className="artistName">
            <strong>Fulano</strong>
          </ArtistName>
          <Background Image="/placeholderImage.png" />
        </Images>

        <Images>
          <ArtistName>
            <strong>Fulano</strong>
          </ArtistName>
          <Background Image="/placeholderImage2.png" />
        </Images>

        <Footer>
          <span>Voltar ao início</span>
          <Image src="/svg/chevronUp.svg" height={16} width={16} />
        </Footer>
      </Container>
    </>
  );
}

export default Desenhos;
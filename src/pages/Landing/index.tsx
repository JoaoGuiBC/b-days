import Link from 'next/link';

import {
  Container,
  WelcomeContainer,
  BackgroundImg,
  Texts,
  MenuContainer,
  ButtonsContainer,
  Card,
  MusicButton,
} from './styles';

export const Landing: React.FC = () => {
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
          <Card>
            <p>Textos</p>

            <Link href="/Textos">
              <a>
                <img src="/pencilIcon.png" alt="Botão para ir para a página de textos" />
              </a>
            </Link>
          </Card>

          <Card>
            <p>Desenhos</p>

            <Link href="/Desenhos">
              <a>
                <img src="/paintIcon.png" alt="Botão para ir para a página de desenhos" />
              </a>
            </Link>
          </Card>
        </ButtonsContainer>

        <Link href="Musicas">
          <a>
            <MusicButton>
              <img
                src="/spotifyLogoIcon.png"
                alt="Botão para ir para a página de músicas"
              />
              <p>Musiquinhas</p>
            </MusicButton>
          </a>
        </Link>
      </MenuContainer>
    </Container>
  );
}
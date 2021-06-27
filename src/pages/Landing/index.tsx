import {
  Container,
  WelcomeContainer,
  BackgroundImg,
  Texts,
  ButtonsContainer
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

      <ButtonsContainer></ButtonsContainer>
    </Container>
  );
}
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

import { Container, Text, CardsContainer } from './styles';

const persons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

const Textos: React.FC = () => {
  return (
    <>
      <Header title="Textos" />
      <Container>
        <Text>
          Este espaço foi criado para demonstrar o quanto você é querida e
          especial para todos nós :&#41;
        </Text>
        <CardsContainer>

          {persons.map(person => (
            <Card
              key={person}
              title={`Pessoa ${person}`}
              altText={`Pessoa ${person}`}
              image="/userPhotoPlaceholder.png"
              isIcon={false}
              initialDelay={((person - 1) / 10)}
            />
          ))}

        </CardsContainer>
      </Container>
    </>
  );
}

export default Textos;
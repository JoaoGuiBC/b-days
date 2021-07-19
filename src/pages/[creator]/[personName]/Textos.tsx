import { useCallback, useState } from "react";

import { Card } from "../../../components/Card";
import { Header } from "../../../components/Header";
import { Modal } from "../../../components/TextsModal";

import { Container, Text, CardsContainer } from '../../../styles/pages/textos';

const persons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

export interface SelectedPersonProps {
  name: string;
}

const Textos: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<SelectedPersonProps>({} as SelectedPersonProps);

  const handleToggleModal = useCallback((personName: string) => {
    setSelectedPerson({ name: personName });
    setIsVisible(true);
  }, []);

  return (
    <>
      <Modal
        isVisible={isVisible}
        setIsVisible={() => setIsVisible(false)}
        person={selectedPerson}
      />
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
              toggleModal={handleToggleModal}
            />
          ))}

        </CardsContainer>
      </Container>
    </>
  );
}

export default Textos;
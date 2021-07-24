import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiPlus } from 'react-icons/fi';

import { Card } from "../../../components/Card";
import { Header } from "../../../components/Header";
import { Modal as TextModal } from "../../../components/TextsModal";
import { Modal as AddNewTextModal } from "../../../components/AddTextModal";

import { Container, Text, CardsContainer, AddTextButton } from '../../../styles/pages/textos';

import { database } from "../../../services/firebase";
import { useAuth } from "../../../hooks/useAuth";

export interface SelectedPersonProps {
  name: string;
  text: string;
}

interface TextosProps {
  authorTexts: [[
    string,
    {
      text: string,
      url: string,
    }
  ]];

  selectedPages: {
    drawsPage: boolean;
    musicsPage: boolean;
    textsPage: boolean;
  };
}

const Textos: React.FC<TextosProps> = ({ authorTexts, selectedPages }) => {
  const [isTextModalVisible, setIsTextModalVisible] = useState(false);
  const [isAddNewTextModalVisible, setIsAddNewTextModalVisible] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<SelectedPersonProps>({} as SelectedPersonProps);

  const router = useRouter();
  const { user } = useAuth();
  const { creator, personName } = router.query;

  const handleToggleModal = (name: string, text: string) => {
    setSelectedPerson({ name, text });
    setIsTextModalVisible(true);
  };

  return (
    <>
      <AddNewTextModal
        isVisible={isAddNewTextModalVisible}
        setIsVisible={() => setIsAddNewTextModalVisible(false)}
      />

      <Head>
        <title>B-Days - Textos</title>
      </Head>

      <TextModal
        isVisible={isTextModalVisible}
        setIsVisible={() => setIsTextModalVisible(false)}
        person={selectedPerson}
      />

      <Header title="Textos" selectedPages={selectedPages} />

      <Container>
        <Text>
          Este espaço é dedicado à demonstrar o quanto você é especial
        </Text>
        <CardsContainer>

          {authorTexts.map((person, index) => (
            <Card
              key={index}
              title={person[0]}
              altText={person[0]}
              image={person[1].url}
              isIcon={false}
              initialDelay={((index - 1) / 10)}
              toggleModal={() => handleToggleModal(person[0], person[1].text)}
            />
          ))}

        </CardsContainer>

        {user?.id === creator && (
          <AddTextButton
            initial={{ opacity: 0, y: -15, boxShadow: "1px 20px 4px rgba(0, 0, 0, 0.1)" }}
            animate={{ opacity: 1, y: 0, boxShadow: '1px 4px 4px rgba(0, 0, 0, 0.4)', }}
            whileHover={{ scale: 1.05, y: -9, boxShadow: "0px 10px 4px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.75, y: 0, boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.4)" }}
            onClick={() => setIsAddNewTextModalVisible(true)}
          >
            <FiPlus />
          </AddTextButton>
        )}
      </Container>
    </>
  );
}

export default Textos;

export const getStaticPaths: GetStaticPaths = async ({}) => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { creator, personName } = params;

  const pageRef = database.ref(`/${creator}/pages/${personName}`);
  const texts = await pageRef.once('value').then(page => {
    return !!page.val().texts ? page.val().texts : ''
  });

  const authorTexts = Object.entries(texts);

  const selectedPages = await pageRef.once('value').then(page => {
    return {
      drawsPage: page.val().drawsPage,
      musicsPage: page.val().musicsPage,
      textsPage: page.val().textsPage,
    }
  });

  return {
    props: {
      authorTexts,
      selectedPages,
    }
  }
}
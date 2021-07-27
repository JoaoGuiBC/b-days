import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

import { Modal } from "../../../components/AddMusicModal";
import { Header } from "../../../components/Header";
import { useAuth } from "../../../hooks/useAuth";
import { database } from "../../../services/firebase";

import { Container, Content, AddMusicButton } from '../../../styles/pages/musicas';

interface MusicasProps {
  musicsLinks: [string];

  selectedPages: {
    drawsPage: boolean;
    musicsPage: boolean;
    textsPage: boolean;
  };
}

const Musicas: React.FC<MusicasProps> = ({ musicsLinks, selectedPages }) => {
  const [isAddNewMusicModalVisible, setIsAddNewMusicModalVisible] = useState(false);

  const router = useRouter();
  const { user } = useAuth();
  const { creator } = router.query;

  return (
    <Container>
      <Modal
        isVisible={isAddNewMusicModalVisible}
        setIsVisible={() => setIsAddNewMusicModalVisible(false)}
      />
      <Head>
        <title>B-Days - Músicas</title>
      </Head>
      <Header title="Musicas" selectedPages={selectedPages} />
      <Content>
        {musicsLinks.map((link, index) => (
          <iframe
            key={index}
            allowTransparency
            src={`https://open.spotify.com/embed/playlist/${link}`}
            allow="encrypted-media"
          />
        ))}
      </Content>

      {user?.id === creator && (
          <AddMusicButton
            initial={{ opacity: 0, y: -15, boxShadow: "1px 20px 4px rgba(0, 0, 0, 0.1)" }}
            animate={{ opacity: 1, y: 0, boxShadow: '1px 4px 4px rgba(0, 0, 0, 0.4)', }}
            whileHover={{ scale: 1.05, y: -9, boxShadow: "0px 10px 4px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.75, y: 0, boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.4)" }}
            onClick={() => setIsAddNewMusicModalVisible(true)}
          >
            <FiPlus />
          </AddMusicButton>
        )}
    </Container>
  );
}

export default Musicas;

export const getStaticPaths: GetStaticPaths = async ({}) => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { creator, personName } = params;

  const pageRef = database.ref(`/${creator}/pages/${personName}`);
  const musicsRef = database.ref(`/${creator}/pages/${personName}/musics`);

  const selectedPages = await pageRef.once('value').then(page => {
    return {
      drawsPage: page.val().drawsPage,
      musicsPage: page.val().musicsPage,
      textsPage: page.val().textsPage,
    }
  });

  const musics = await musicsRef.once('value').then(link => {
    return link.val();
  });

  const musicsLinks: string[] = musics ? Object.values(musics) : [];

  return {
    props: {
      musicsLinks,
      selectedPages,
    },
    revalidate: 60 * 60 //1 hour
  }
}
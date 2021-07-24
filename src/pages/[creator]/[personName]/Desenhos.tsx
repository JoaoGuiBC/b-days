import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { FiChevronUp, FiDownload, FiPlus } from "react-icons/fi";
import { Modal } from "../../../components/AddDrawModal";

import { Header } from "../../../components/Header";
import { useAuth } from "../../../hooks/useAuth";
import { database } from "../../../services/firebase";

import {
  Container,
  Text,
  Images,
  Separator,
  Background,
  ArtistInfo,
  Footer,
  AddTextButton,
} from '../../../styles/pages/desenhos';

interface DesenhosProps {
  authorDraws: [[string, string]];

  selectedPages: {
    drawsPage: boolean;
    musicsPage: boolean;
    textsPage: boolean;
  };
}

const Desenhos: React.FC<DesenhosProps> = ({ authorDraws, selectedPages }) => {
  const [isAddNewDrawModalVisible, setIsAddNewDrawModalVisible] = useState(false);
  const [isAuthorInformationVisible, setIsAuthorInformationVisible] = useState<boolean[]>(
    authorDraws.map(() => false),
  );

  const router = useRouter();

  const drawingsAuthorsRefs = useRef(new Array());
  const { user } = useAuth();
  const { creator } = router.query;

  const chechIfArtistInfoElementIsVisible = entries => {
    entries.forEach((entry) => {
      console.log('cuVisivel')
      if (entry.isIntersecting) {
        const newValue = isAuthorInformationVisible.map((_, authorIndex) => {
          if (Number(entry.target.id) === authorIndex) {
            return true;
          }
          return false;
        });
        setIsAuthorInformationVisible(newValue);
      }
      if (!entry.isIntersecting) {
        const newValue = isAuthorInformationVisible.map((_, authorIndex) => {
          if (Number(entry.target.id) === authorIndex) {
            return false;
          }
          return true;
        });
        setIsAuthorInformationVisible(newValue);
      }
    });
  };

  const options = { threshold: 0.5 };

  useEffect(() => {
    const observer = new IntersectionObserver(chechIfArtistInfoElementIsVisible, options);

    drawingsAuthorsRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref)
      }

      return () => {
        if (ref) {
          observer.unobserve(ref);
        }
      };
    });
  }, [drawingsAuthorsRefs]);

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function animateArtistInfo(artistInfoId: number) {
    if (isAuthorInformationVisible[artistInfoId]) {
      return 0
    } else {
      return '-100%'
    }
  }

  return (
    <>
      <Modal
        isVisible={isAddNewDrawModalVisible}
        setIsVisible={() => setIsAddNewDrawModalVisible(false)}
      />
      <Head>
        <title>B-Days - Desenhos</title>
      </Head>
      <Header title="Desenhos" selectedPages={selectedPages} />
      <Container>
        <Text>
          Artes feitas por pessoas que gostam de ti
        </Text>

        {authorDraws.map((draw, index) => (
          <Images key={index}>
            <Separator />
            <Background Image={draw[1]}>
              <ArtistInfo
                id={`${index}`}
                ref={(element) => drawingsAuthorsRefs.current.push(element)}
                initial={{ x: '-100%' }}
                animate={{ x: animateArtistInfo(index) }}
                transition={{ duration: 0.2 }}
              >
                <span>Feito por:</span>
                <strong>{draw[0]}</strong>
                <a href={draw[1]} download={`${draw[0]}.png`}>
                  Download
                  <FiDownload size="1rem" />
                </a>
              </ArtistInfo>
            </Background>
          </Images>
        ))}

        {authorDraws.length >= 1 && (
          <Footer>
            <span onClick={handleScrollToTop}>Voltar ao início</span>
            <FiChevronUp size="1.5rem" />
          </Footer>
        )}

        {user?.id === creator && (
          <AddTextButton
            initial={{ opacity: 0, y: -15, boxShadow: "1px 20px 4px rgba(0, 0, 0, 0.1)" }}
            animate={{ opacity: 1, y: 0, boxShadow: '1px 4px 4px rgba(0, 0, 0, 0.4)', }}
            whileHover={{ scale: 1.05, y: -9, boxShadow: "0px 10px 4px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.75, y: 0, boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.4)" }}
            onClick={() => setIsAddNewDrawModalVisible(true)}
          >
            <FiPlus />
          </AddTextButton>
        )}
      </Container>
    </>
  );
}

export default Desenhos;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { creator, personName } = params;

  const pageRef = database.ref(`/${creator}/pages/${personName}`);
  const draws = await pageRef.once('value').then(page => {
    return !!page.val().draws ? page.val().draws : ''
  });

  const authorDraws = Object.entries(draws);

  const selectedPages = await pageRef.once('value').then(page => {
    return {
      drawsPage: page.val().drawsPage,
      musicsPage: page.val().musicsPage,
      textsPage: page.val().textsPage,
    }
  });

  return {
    props: {
      authorDraws,
      selectedPages,
    }
  }
}
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { FiChevronUp, FiDownload } from "react-icons/fi";

import { Header } from "../../../components/Header";
import { database } from "../../../services/firebase";

import {
  Container,
  Text,
  Images,
  Separator,
  Background,
  ArtistInfo,
  Footer,
} from '../../../styles/pages/desenhos';

interface DesenhosProps {
  selectedPages: {
    drawsPage: boolean;
    musicsPage: boolean;
    textsPage: boolean;
  };
}

const drawings = [{ id: 1, author: 'Pessoa 1', src: '/placeholderImage.png' }, { id: 2, author: 'Pessoa 2', src: '/placeholderImage2.png' }, { id: 3, author: 'Pessoa 3', src: '/placeholderImage.png' }, { id: 4, author: 'Pessoa 4', src: '/placeholderImage2.png' }, { id: 5, author: 'Pessoa 5', src: '/placeholderImage.png' }, { id: 6, author: 'Pessoa 6', src: '/placeholderImage2.png' }, { id: 7, author: 'Pessoa 7', src: '/placeholderImage.png' }, { id: 8, author: 'Pessoa 8', src: '/placeholderImage2.png' }];

const Desenhos: React.FC<DesenhosProps> = ({ selectedPages }) => {
  const [isAuthorInformationVisible, setIsAuthorInformationVisible] = useState<boolean[]>(
    drawings.map(() => false)
  );

  const drawingsAuthorsRefs = useRef(new Array());

  const chechIfArtistInfoElementIsVisible = entries => {
    entries.forEach((entry) => {
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
  const observer = new IntersectionObserver(chechIfArtistInfoElementIsVisible, options);

  useEffect(() => {
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
      <Head>
        <title>B-Days - Desenhos</title>
      </Head>
      <Header title="Desenhos" selectedPages={selectedPages} />
      <Container>
        <Text>
          Parva details de perfectum est fecit
        </Text>

        {drawings.map((draw, index) => (
          <Images key={draw.id}>
            <Separator />
            <Background Image={draw.src}>
              <ArtistInfo
                id={`${index}`}
                ref={(element) => drawingsAuthorsRefs.current.push(element)}
                initial={{ x: '-100%' }}
                animate={{ x: animateArtistInfo(index) }}
                transition={{ duration: 0.2 }}
              >""
                <span>Feito por:</span>
                <strong>{draw.author}</strong>
                <a href={draw.src} download={`${draw.author}.png`}>
                  Download
                  <FiDownload size="1rem" />
                </a>
              </ArtistInfo>
            </Background>
          </Images>
        ))}

        <Footer>
          <span onClick={handleScrollToTop}>Voltar ao início</span>
          <FiChevronUp size="1.5rem" />
        </Footer>
      </Container>
    </>
  );
}

export default Desenhos;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { creator, personName } = params;

  const pageRef = database.ref(`/${creator}/pages/${personName}`);

  const selectedPages = await pageRef.once('value').then(page => {
    return {
      drawsPage: page.val().drawsPage,
      musicsPage: page.val().musicsPage,
      textsPage: page.val().textsPage,
    }
  });

  return {
    props: {
      selectedPages,
    }
  }
}
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

import {
  Container,
  Background,
  Content,
  LinkInput,
  Button,
} from './styles';

import { database } from "../../services/firebase";
import { useAuth } from "../../hooks/useAuth";

interface ModalProps {
  isVisible: boolean;
  setIsVisible: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isVisible, setIsVisible }) => {
  const [link, setLink] = useState('');

  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        setIsVisible();
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, []);

  async function handleAddText() {
    if (link.trim() === '') {
      return;
    }
    const endIndex = link.indexOf("?")

    const slicedLink = link.slice(34, endIndex);

    const { personName } = router.query;

    const pageRef = database.ref(`${user.id}/pages/${personName}/musics`);

    await pageRef.push(slicedLink);

    setLink('');
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Background
            onClick={setIsVisible}
          />
          <Content
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <button type="button" onClick={setIsVisible}>
              <FiX size="1.5rem" />
            </button>

            <LinkInput>
              <span>Link da playlist</span>
              <input
                type="text"
                placeholder="Ex: https://open.spotify.com/playlist/37i9dQZEVXbMDoHDwVN2tF?si=90b4cefdbd1e42b6"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </LinkInput>

            <Button onClick={handleAddText}>
              Adicionar
            </Button>
          </Content>
        </Container>
      )}
    </AnimatePresence>
  );
}
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

import {
  Container,
  Background,
  Content,
  NameInput,
  TextInput,
  Button,
  ImageInput,
} from './styles';

import { database, storage } from "../../services/firebase";
import { useAuth } from "../../hooks/useAuth";

interface ModalProps {
  isVisible: boolean;
  setIsVisible: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isVisible, setIsVisible }) => {
  const [authorName, setAuthorName] = useState('');
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

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
    if (authorName.trim() === '' || text.trim() === '' || !inputRef.current.files[0]) {
      return;
    }

    const { personName } = router.query;

    const pageRef = database.ref(`${user.id}/pages/${personName}/texts/${authorName}`);
    const imageRef = storage.ref(`${user.id}/pages/${personName}/${authorName}/userImage.jpg`);

    const image = inputRef.current.files[0];
    await imageRef.put(image);

    imageRef.getDownloadURL().then(function (url) {
      pageRef.set({
        text,
        url,
      });
    });

    setAuthorName('');
    setText('');
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

            <NameInput>
              <span>Autor do texto</span>
              <input
                type="text"
                placeholder="Ex: John Doe"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
              />
            </NameInput>

            <TextInput>
              <span>Texto</span>
              <textarea
                placeholder="Ex: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum magni velit enim ab asperiores!"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </TextInput>

            <ImageInput>
              <label htmlFor="fileInput">Selecionar uma imagem do autor</label>
              <input
                type="file"
                ref={inputRef}
                id="fileInput"
              />
            </ImageInput>

            <Button onClick={handleAddText}>
              Adicionar
            </Button>
          </Content>
        </Container>
      )}
    </AnimatePresence>
  );
}
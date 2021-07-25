import { FormEvent, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion';


import { useAuth } from '../../hooks/useAuth';
import { database, storage } from '../../services/firebase';

import {
  Container,
  Background,
  Content,
  Title,
  Form,
  Input,
  ImageInput,
  ContentSelector,
  Button,
} from './styles';

interface NewPageModal {
  isVisible: boolean;
  setIsVisible: () => void;
}

export const NewPageModal: React.FC<NewPageModal> = ({ isVisible, setIsVisible }) => {
  const [personName, setPersonName] = useState('');
  const [isTextSelected, setIsTextSelected] = useState(false);
  const [isDrawSelected, setIsDrawSelected] = useState(false);
  const [isMusicSelected, setIsMusicSelected] = useState(false);

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

  async function handleCreateNewPage(event: FormEvent) {
    event.preventDefault();

    if (personName.trim() === '' || !inputRef.current.files[0]) {
      return;
    }

    if (!isTextSelected && !isDrawSelected && !isMusicSelected) {
      return;
    }

    const pageRef = database.ref(`${user.id}/pages/${personName}`);
    const imageRef = storage.ref(`${user.id}/pages/${personName}/photo.jpg`);

    const image = inputRef.current.files[0];
    await imageRef.put(image);

    imageRef.getDownloadURL().then(async (url) => {
      await pageRef.set({
        personName,
        personPhoto: url,
        textsPage: isTextSelected,
        drawsPage: isDrawSelected,
        musicsPage: isMusicSelected,
        creatorId: user?.id,
      });
    });

    router.push(
      `/${user.id}/${personName}/Landing`
    );

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
            <Title>Criar sala</Title>
            <Form>
              <Input>
                <span>Nome da pessoa</span>
                <input
                  type="text"
                  placeholder="Ex: John Doe"
                  value={personName}
                  onChange={(e) => setPersonName(e.target.value)}
                />
              </Input>

              <ImageInput>
                <label htmlFor="fileInput">Escolher foto da pessoa</label>
                <input
                  type="file"
                  ref={inputRef}
                  id="fileInput"
                />
              </ImageInput>

              <ContentSelector>
                <span>Selecione quais conteudos irão ter</span>
                <div>
                  <input
                    type="checkbox"
                    placeholder="Textos"
                    onChange={() => setIsTextSelected(value => !value)}
                  />
                  Textos
                </div>
                <div>
                  <input
                    type="checkbox"
                    placeholder="Desenhos"
                    onChange={() => setIsDrawSelected(value => !value)}
                  />
                  Desenhos
                </div>
                <div>
                  <input
                    type="checkbox"
                    placeholder="Músicas"
                    onChange={() => setIsMusicSelected(value => !value)}
                  />
                  Musicas
                </div>
              </ContentSelector>

              <Button
                animate={{ opacity: 1, y: 0, boxShadow: '1px 4px 4px rgba(0, 0, 0, 0.4)', }}
                whileHover={{ scale: 1.05, y: -2, boxShadow: "1px 8px 4px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.90, y: 0, boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)" }}
                transition={{ duration: 0.2, bounce: 1 }}
                onClick={handleCreateNewPage}
              >
                Criar
              </Button>
            </Form>
          </Content>
        </Container>
      )}
    </AnimatePresence>
  );
}

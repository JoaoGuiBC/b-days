import { AnimatePresence } from 'framer-motion';
import { FormEvent, useEffect, useState } from 'react';


import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import {
  Container,
  Background,
  Content,
  Title,
  Form,
  Input,
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

  const { user } = useAuth();

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

    if (personName.trim() === '') {
      return;
    }

    if (!isTextSelected && !isDrawSelected && !isMusicSelected) {
      return;
    }

    const pageRef = database.ref('pages');

    const firebasePage = await pageRef.push({
      personName,
      textsPage: isTextSelected,
      drawsPage: isDrawSelected,
      musicsPage: isMusicSelected,
      creatorId: user?.id,
    });

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

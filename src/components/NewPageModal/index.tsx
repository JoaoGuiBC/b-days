import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

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
  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        setIsVisible();
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, []);

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
                <input type="text" placeholder="Ex: John Doe" />
              </Input>

              <ContentSelector>
                <span>Selecione quais conteudos irão ter</span>
                <input type="checkbox" placeholder="cu" />
                <input type="checkbox" placeholder="cu" />
                <input type="checkbox" placeholder="cu" />
              </ContentSelector>

              <Button>Criar</Button>
            </Form>
          </Content>
        </Container>
      )}
    </AnimatePresence>
  );
}

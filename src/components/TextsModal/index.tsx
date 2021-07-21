import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

import { Container, Background, Content } from './styles';
import { SelectedPersonProps } from "../../pages/[creator]/[personName]/Textos";

interface ModalProps {
  isVisible: boolean;
  setIsVisible: () => void;
  person: SelectedPersonProps;
}

export const Modal: React.FC<ModalProps> = ({ isVisible, setIsVisible, person }) => {
  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        setIsVisible();
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

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
            <strong>{person.name}</strong>
            <p>{person.text}</p>
          </Content>
        </Container>
      )}
    </AnimatePresence>
  );
}
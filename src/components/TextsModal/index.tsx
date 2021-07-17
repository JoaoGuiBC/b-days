import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

import { Container, Background, Content } from './styles';
import { SelectedPersonProps } from "../../pages/Textos";

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
              <Image src="/svg/close.svg" height={24} width={24} />
            </button>
            <strong>{person.name}</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia molestie neque id viverra. Curabitur facilisis lorem in egestas pretium. In non mattis tortor, a blandit libero. Ut sapien massa, laoreet vitae velit at, mollis porttitor tellus. Praesent tortor dui, lobortis ac risus sed, elementum interdum lorem.</p>
          </Content>
        </Container>
      )}
    </AnimatePresence>
  );
}
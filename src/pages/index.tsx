import { useState } from "react";
import { Container, Title, Content, NewPageButton, Separator, Button } from "../styles/pages/index";

import { useAuth } from "../hooks/useAuth";
import { NewPageModal } from "../components/NewPageModal";
import { FiPlus } from "react-icons/fi";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const { user, signInWithGoogle } = useAuth();

  async function handleCreateNewPage() {
    if (!user) {
      return signInWithGoogle();
    } else {
      return handleToggleModal();
    }
  }

  function handleToggleModal() {
    setIsVisible(value => !value);
  }

  return (
    <>
      <NewPageModal isVisible={isVisible} setIsVisible={handleToggleModal} />
      <Container>
        <Title>
          <strong>B </strong>
          - Days
        </Title>

        <Content>
          <NewPageButton onClick={handleCreateNewPage} isLoggedIn={user ? true : false}>
            {user ? (
              <>
                <FiPlus />
                Crie sua página
              </>
            ) : (
              <>
                <img src="/svg/googleIcon.svg" alt="Google logo" />
                Faça login para criar uma página
              </>
            )}

          </NewPageButton>

          {user && (
            <>
              <Separator>OU</Separator>

              <Button
                animate={{ opacity: 1, y: 0, boxShadow: '1px 4px 4px rgba(0, 0, 0, 0.4)', }}
                whileHover={{ scale: 1.05, y: -2, boxShadow: "1px 8px 4px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.90, y: 0, boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)" }}
                transition={{ duration: 0.2, bounce: 1 }}
              >Veja suas páginas criadas</Button>
            </>
          )}
        </Content>
      </Container>
    </>
  )
}

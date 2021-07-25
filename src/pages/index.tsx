import { useState } from "react";
import { Container, Title, Content, NewPageButton, Separator, Button } from "../styles/pages/index";

import { useAuth } from "../hooks/useAuth";
import { NewPageModal } from "../components/NewPageModal";
import { FiPlus } from "react-icons/fi";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const { user, signInWithGoogle } = useAuth();

  console.log({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
  })

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

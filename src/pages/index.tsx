import { Container, Title, Content, NewPageButton, Separator, Button } from "./styles";

import { useAuth } from "../hooks/useAuth";

export default function Home() {
  const { user, signInWithGoogle } = useAuth();

  function handleCreateNewPage() {
    if (!user) {
      return signInWithGoogle();
    }

    alert('Você já está logado');
  }

  return (
    <Container>
      <Title>
        <strong>B </strong>
        - Days
      </Title>

      <Content>
        <NewPageButton onClick={handleCreateNewPage} isLoggedIn={user ? true : false}>
          {user ? (
            <>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="17.5" y1="32.5" x2="17.5" y2="1.5" stroke-width="2" stroke-linecap="round" />
                <line x1="1.5" y1="17.5" x2="32.5" y2="17.5" stroke-width="2" stroke-linecap="round" />
                <clipPath id="clip0">
                  <rect width="33" height="33" fill="white" transform="translate(0.5 0.5)" />
                </clipPath>
              </svg>
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
  )
}

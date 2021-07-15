import { Container, Title, Content, NewPageButton, Separator, Button } from "./styles";

export default function Home() {
  return (
    <Container>
      <Title>
        <strong>B </strong>
        - Days
      </Title>

      <Content>
        <NewPageButton>
          <img src="/svg/googleIcon.svg" alt="Google logo" />
          Faça login para criar uma página
        </NewPageButton>

        <Separator>OU</Separator>

        <Button
          animate={{ opacity: 1, y: 0, boxShadow: '1px 4px 4px rgba(0, 0, 0, 0.4)', }}
          whileHover={{ scale: 1.05, y: -2, boxShadow: "1px 8px 4px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.90, y: 0, boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)" }}
          transition={{ duration: 0.2, bounce: 1 }}
        >Veja suas páginas criadas</Button>
      </Content>
    </Container>
  )
}

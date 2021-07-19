import Head from "next/head";
import { Header } from "../../../components/Header";

const Musicas: React.FC = () => {
  return (
    <>
      <Head>
        <title>B-Days - Músicas</title>
      </Head>
      <Header title="Musicas" />
    </>
  );
}

export default Musicas;
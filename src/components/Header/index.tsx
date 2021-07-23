import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import { Container, Title, ButtonsContainer } from "./styles";

interface HeaderProps {
  title: string;

  selectedPages: {
    drawsPage: boolean;
    musicsPage: boolean;
    textsPage: boolean;
  };
}

export const Header: React.FC<HeaderProps> = ({ title, selectedPages }) => {
  const router = useRouter();

  const { creator, personName } = router.query;

  const images = [
    { name: 'Textos', image: '/pencilIcon.png', show: selectedPages.textsPage },
    { name: 'Desenhos', image: '/paintIcon.png', show: selectedPages.drawsPage },
    { name: 'Musicas', image: '/spotifyLogoIcon.png', show: selectedPages.musicsPage },
  ]

  return (
    <Container>
      <Link href={`/${creator}/${personName}/Landing`}>
        <a>
          <Image src="/svg/arrow.svg" height={32} width={32} />
        </a>
      </Link>

      <Title>
        <span>{title}</span>
        <motion.img
          src={images.find(image => image.name === title).image}
          height={24}
          width={24}
          layoutId={images.find(image => image.name === title).name}
        />
      </Title>

      <ButtonsContainer>

        {images.map(image => {
          if (image.name !== title && image.show)
            return (
              <Link href={image.name} key={image.name}>
                <a>
                  <motion.img
                    src={image.image}
                    height={32}
                    width={32}
                    layoutId={image.name}
                  />
                </a>
              </Link>
            )
        })}

      </ButtonsContainer>
    </Container>
  );
}

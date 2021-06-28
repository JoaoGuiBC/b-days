import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Container, Title, ButtonsContainer } from "./styles";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const images = [
    { name: 'Textos', image: '/pencilIcon.png' },
    { name: 'Desenhos', image: '/paintIcon.png' },
    { name: 'Musicas', image: '/spotifyLogoIcon.png' },
  ]

  return (
    <Container>
      <Link href="/">
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
          if (image.name !== title)
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

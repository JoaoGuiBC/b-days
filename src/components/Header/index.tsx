import Link from "next/link";
import Image from "next/image";

import { Container, Title, ButtonsContainer } from "./styles";

interface HeaderProps {
  title: string
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
        <Image
          src={images.find(image => image.name === title).image}
          height={24}
          width={24}
        />
      </Title>

      <ButtonsContainer>

        {images.map(image => {
          console.log('cu')

          if (image.name !== title)
            return (
              <Link href={image.name} key={image.name}>
                <a>
                  <Image src={image.image} height={32} width={32} />
                </a>
              </Link>
            )
        })}

      </ButtonsContainer>
    </Container>
  );
}
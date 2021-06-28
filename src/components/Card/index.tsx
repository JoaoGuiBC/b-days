import Link from "next/link";

import { Container } from './styles';

interface CardProps {
  title: string;
  image: string;
  altText: string;
  isIcon: boolean;
}

export const Card: React.FC<CardProps> = ({ title, image, altText, isIcon }) => {
  return (
    <Container isIcon={isIcon}>
      <p>{title}</p>

      {isIcon ? (
        <Link href={`/${title}`}>
          <a>
            <img src={image} alt={altText} />
          </a>
        </Link>
      ) : (
        <img src={image} alt={altText} />
      )}
    </Container>
  );
}

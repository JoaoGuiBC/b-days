import Link from "next/link";
import { motion } from 'framer-motion';

import { Container } from './styles';
import { useState } from "react";

interface CardProps {
  title: string;
  image: string;
  altText: string;
  isIcon: boolean;
}

export const Card: React.FC<CardProps> = ({ title, image, altText, isIcon }) => {
  const [animationDelay, setAnimationDelay] = useState(0.2);

  return (
    <Container
      isIcon={isIcon}
      initial={{ opacity: 0, y: -15, boxShadow: "1px 20px 4px rgba(0, 0, 0, 0.1)" }}
      animate={{ opacity: 1, y: 0, boxShadow: '1px 4px 4px rgba(0, 0, 0, 0.4)', }}
      onAnimationComplete={() => setAnimationDelay(0)}
      whileHover={{ scale: 1.05, y: -9, boxShadow: "1px 14px 4px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.5, bounce: 1, delay: animationDelay }}
    >
      <p>{title}</p>

      {isIcon ? (
        <Link href={`/${title}`}>
          <a>
            <motion.img src={image} alt={altText} layoutId={title} />
          </a>
        </Link>
      ) : (
        <img src={image} alt={altText} />
      )}
    </Container>
  );
}

import { useCallback, useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion';

import { Container } from './styles';

interface CardProps {
  title: string;
  image: string;
  altText: string;
  isIcon: boolean;
  link?: string;
  initialDelay: number;
  toggleModal?: (personName: string) => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  image,
  altText,
  isIcon,
  link,
  initialDelay,
  toggleModal,
}) => {
  const [animationDelay, setAnimationDelay] = useState(initialDelay);
  const [animationDuration, setAnimationDuration] = useState(0.75);

  const changeAnimationValues = useCallback(() => {
    setAnimationDelay(0);
    setAnimationDuration(0.2);
  }, [setAnimationDelay, setAnimationDuration]);

  return (
    <Container
      src={image}
      isIcon={isIcon}
      initial={{ opacity: 0, y: -15, boxShadow: "1px 20px 4px rgba(0, 0, 0, 0.1)" }}
      animate={{ opacity: 1, y: 0, boxShadow: '1px 4px 4px rgba(0, 0, 0, 0.4)', }}
      onAnimationComplete={changeAnimationValues}
      whileHover={{ scale: 1.05, y: -9, boxShadow: "1px 14px 4px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 0.75, y: 0, boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)" }}
      transition={{ duration: animationDuration, bounce: 1, delay: animationDelay }}
    >
      <p>{title}</p>

      {isIcon ? (
        <Link href={link}>
          <a>
            <motion.img src={image} alt={altText} layoutId={title} />
          </a>
        </Link>
      ) : (
        <div onClick={() => toggleModal(title)} />
      )}
    </Container>
  );
}

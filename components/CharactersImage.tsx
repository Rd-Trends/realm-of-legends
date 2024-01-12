import { Character } from "@/types/character";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  characters: Character[];
};

const CharactersImage = ({ characters }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <AnimatePresence mode="popLayout">
      {characters.map((character, index, arr) => {
        const length = arr.length - 1;
        return (
          <motion.div
            exit={{ x: 2000 }}
            animate={{
              left: 0,
              x: 0,
              y: 0,
              rotate: getRotateValue(index, length, 5),
            }}
            initial={{
              x: !mounted ? getMountedXAnimationValue(index, 1500) : "100%",
              y: !mounted ? getMountedYAnimationValue(index, 500) : 0,
            }}
            transition={{
              duration: !mounted ? 0.5 : 0.5,
              // give delay so as to enable loader to completely unmount
              delay: !mounted ? 1.2 : 0,
            }}
            key={character.name + index}
            className={`absolute mx-auto max-w-[50vw] left-0 right-0  w-fit `}
            style={{
              zIndex: index + 1,
              transform: `rotate(${getRotateValue(index, length, 5)}deg)`,
            }}>
            <Image
              src={character.image.small}
              alt=""
              width={300}
              height={420}
              priority
              quality={100}
            />
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
};

export default CharactersImage;

const getRotateValue = (index: number, length: number, multiplier: number) => {
  // 0 should have greatest value
  return index === length ? 0 : (length - index) * multiplier;
};

const getMountedYAnimationValue = (index: number, value: number) => {
  switch (index) {
    case 0:
      return value;
    case 1:
      return value;
    case 2:
      return -Math.abs(value);
    case 3:
      return -Math.abs(value);
    default:
      return value;
  }
};
const getMountedXAnimationValue = (index: number, value: number) => {
  switch (index) {
    case 0:
      return -Math.abs(value);
    case 1:
      return value;
    case 2:
      return -Math.abs(value);
    case 3:
      return value;
    default:
      return value;
  }
};

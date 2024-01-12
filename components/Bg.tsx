import { Character } from "@/types/character";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const variants = {
  enter: { x: 1000 },
  center: {
    x: 0,
  },
  exit: { x: -1000 },
};

const Bg = ({
  activeCharacter,
  direction,
}: {
  activeCharacter: Character;
  direction: "left" | "right";
}) => {
  return (
    <>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={activeCharacter.name}
          variants={variants}
          initial={{ left: direction === "right" ? "-100%" : "100%" }}
          animate={{ left: 0 }}
          exit={{ left: direction === "right" ? "100%" : "-100%" }}
          transition={{ duration: 0.5 }}
          className="h-full w-full absolute -z-20 top-0 bottom-0 right-0 left-0 object-cover object-top">
          <Image
            src={activeCharacter.image.large}
            alt={activeCharacter.name}
            width={1920}
            height={500}
            className=" blur-lg w-full h-full scale-110 object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="h-full w-full absolute -z-10 top-0 bottom-0 right-0 left-0 object-cover object-top bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.40)_0%,_rgba(0,_0,_0,_0.40)_100%)]" />
    </>
  );
};

export default Bg;

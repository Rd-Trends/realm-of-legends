import { lindenHill } from "@/app/font";
import { Character } from "@/types/character";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const CharacterName = ({
  activeCharacter,
  direction,
}: {
  activeCharacter: Character;
  direction: "left" | "right";
}) => {
  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.span
        key={activeCharacter.name}
        initial={{ y: direction === "right" ? "-20%" : "20%" }}
        animate={{ y: 0 }}
        exit={{
          y: direction === "right" ? "20%" : "-20%",
        }}
        transition={{ duration: 0.5 }}
        className={`${lindenHill.className} capitalize text-[#f5f5f5] text-6xl block`}>
        {activeCharacter.name}
      </motion.span>
    </AnimatePresence>
  );
};

export default CharacterName;

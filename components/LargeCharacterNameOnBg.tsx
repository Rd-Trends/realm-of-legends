import { Character } from "@/types/character";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const LargeCharacterNameOnbg = ({
  activeCharacter,
  direction,
}: {
  activeCharacter: Character;
  direction: "left" | "right";
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <AnimatePresence mode="popLayout">
      <motion.span
        key={activeCharacter.name}
        initial={{
          left: direction === "right" ? "100%" : "-100%",
        }}
        animate={{ left: -35 }}
        exit={{
          left: direction === "right" ? "-100%" : "100%",
        }}
        transition={{ duration: 0.5, delay: !mounted ? 1.2 : 0 }}
        className=" absolute top-0 translate-y-1/2  right-0 h-full z-10 text-[150px] lg:text-[400px] text-[rgba(255,_255,_255,_0.15)] font-extrabold leading-[0px] mx-0 px-0 ">
        {activeCharacter.name}
      </motion.span>
    </AnimatePresence>
  );
};

export default LargeCharacterNameOnbg;

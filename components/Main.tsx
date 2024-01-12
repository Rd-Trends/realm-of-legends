import React, { useMemo, useState } from "react";
import Header from "./Header";
import Bg from "./Bg";
import Footer from "./Footer";
import ControlBtn from "./ControlBtn";
import LargeCharacterNameOnbg from "./LargeCharacterNameOnBg";
import ArrowLeft from "@/vectors/arrowLeft";
import ArrowLight from "@/vectors/arrowLight";
import CharactersImage from "./CharactersImage";
import CharacterName from "./CharacterName";

const charactersData = [
  {
    id: 1,
    name: "Ravenna",
    image: {
      small: "/Ravenna.png",
      large: "/RavennaLG.png",
    },
  },
  {
    id: 2,
    name: "Drakonos",
    image: {
      small: "/Drakonos.png",
      large: "/DrakonosLG.png",
    },
  },
  {
    id: 3,
    name: "Valkyra",
    image: {
      small: "/Valkyra.png",
      large: "/ValkyraLG.png",
    },
  },
  {
    id: 4,
    name: "Ignatia",
    image: {
      small: "/Ignatia.png",
      large: "/IgnatiaLG.png",
    },
  },
];

const Main = () => {
  const [ids, setIds] = useState(() => {
    return charactersData.map((character, index) => index + 1);
  });
  const [bgAnimationDirection, setBgAnimationDirection] = useState<
    "left" | "right"
  >("left");

  const characters = useMemo(() => {
    return charactersData.filter((character) => ids.includes(character.id));
  }, [ids]);

  const activeCharacter = characters[characters.length - 1];

  const handleNext = () => {
    setBgAnimationDirection("right");
    setIds((ids) => {
      if (ids.length === 1) return ids;
      const newIds = [...ids];
      newIds.pop();
      return newIds;
    });
  };

  const handlePrev = () => {
    setBgAnimationDirection("left");
    setIds((ids) => {
      if (ids.length === charactersData.length) return ids;
      const last = ids[ids.length - 1];
      return [...ids, last + 1];
    });
  };

  return (
    <div className="relative w-screen h-screen flex flex-col justify-between overflow-hidden">
      <Bg activeCharacter={activeCharacter} direction={bgAnimationDirection} />
      <Header />
      <div className=" flex flex-col items-center w-full space-y-16">
        <div className=" relative w-full">
          <LargeCharacterNameOnbg
            activeCharacter={activeCharacter}
            direction={bgAnimationDirection}
          />

          <div className=" flex items-center justify-between relative z-10 p-4  md:px-16">
            <ControlBtn
              onClick={handlePrev}
              disabled={characters.length === charactersData.length}>
              <ArrowLeft />
            </ControlBtn>
            <div className=" relative w-3/4 h-[20rem] flex items-center justify-center">
              <CharactersImage characters={characters} />
            </div>
            <ControlBtn
              onClick={handleNext}
              disabled={characters?.length === 1}>
              <ArrowLight />
            </ControlBtn>
          </div>
        </div>

        <CharacterName activeCharacter={activeCharacter} direction="left" />
      </div>
      <Footer activeIndex={characters.length} />
    </div>
  );
};

export default Main;

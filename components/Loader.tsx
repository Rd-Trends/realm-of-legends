"use client";

import { italianno } from "@/app/font";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";

const Loader = ({ timer }: { timer: number }) => {
  return (
    <div className=" w-screen h-screen bg-[#333] flex flex-col items-center justify-center overflow-hidden">
      <div className=" w-fit absolute top-8 mx-auto">
        <Logo />
      </div>
      {/* <AnimatePresence> */}
      {timer < 100 && (
        <>
          <motion.div
            exit={{ x: "1500px", y: "1000px", scale: 3 }}
            transition={{ duration: 1 }}
            className="circle_with_animated_border mt-12">
            <h1
              className={` ${italianno.className} text-[#F5F5F5] text-[2rem] md:text-[4rem] `}>
              Realm of Legends
            </h1>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} transition={{ duration: 1.2 }}>
            <p className=" text-[#F5F5F5] text-xl mt-12">{`${timer}%`}</p>
          </motion.div>
        </>
      )}
      {/* </AnimatePresence> */}
    </div>
  );
};

export default Loader;

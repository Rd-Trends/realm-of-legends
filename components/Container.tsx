"use client";

import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { AnimatePresence, motion } from "framer-motion";
import Main from "./Main";

const Container = () => {
  const [timer, setTimer] = useState(0);

  // counts up to 100 and then stops
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => {
        if (timer < 100) {
          return timer + 1;
        } else {
          clearInterval(interval);
          return timer;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-screen h-screen overflow-hidden">
      <AnimatePresence>
        {timer < 100 && (
          <motion.div
            key="loader"
            exit={{ opacity: 0.9 }}
            transition={{ duration: 0.2, delay: 1 }}>
            <Loader timer={timer} />
          </motion.div>
        )}
        {timer >= 100 && <Main key="main" />}
      </AnimatePresence>
    </div>
  );
};

export default Container;

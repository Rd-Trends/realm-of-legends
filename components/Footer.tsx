import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const Footer = ({ activeIndex }: { activeIndex: number }) => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      // give delay so as to enable loader to completely unmount
      transition={{ duration: 0.5, delay: 1.2 }}
      className=" flex items-center justify-between p-4 md:py-8 md:px-16">
      <Link
        href="#"
        className=" text-base text-[#F5F5F5] inline-flex items-center space-x-1">
        <span className="tracking-[0.3px]">Dicord</span>
        
      </Link>
      <span className=" text-3xl text-[#F5F5F5] tracking-[1.5px]">{`0${activeIndex}`}</span>
    </motion.div>
  );
};

export default Footer;

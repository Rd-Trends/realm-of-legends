import { italianno } from "@/app/font";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      // give delay so as to enable loader to completely unmount
      transition={{ duration: 0.5, delay: 1.2 }}
      className=" flex items-center justify-between p-4 md:py-8 md:px-16">
      <Link
        href="#"
        className=" no-underline text-xs md:text-base text-[#F5F5F5] tracking-[0.3px]">
        ABOUT
      </Link>
      <Link
        href="/"
        className={` ${italianno.className} text-4xl md:text-5xl text-[#F5F5F5] tracking-[1px]`}>
        Realm of Legends
      </Link>
      <Link
        href="#"
        className=" no-underline text-xs md:text-base text-[#F5F5F5] tracking-[0.3px]">
        CONTACT
      </Link>
    </motion.div>
  );
};

export default Header;

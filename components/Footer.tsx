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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="15"
          viewBox="0 0 17 15"
          fill="none">
          <path
            d="M15.9889 5.19285C16.4672 5.46899 16.6311 6.08058 16.3549 6.55888L11.8549 14.3531C11.5788 14.8314 10.9672 14.9953 10.4889 14.7191C10.0106 14.443 9.84672 13.8314 10.1229 13.3531L14.1229 6.4249L7.19466 2.4249C6.71637 2.14876 6.55249 1.53717 6.82863 1.05888C7.10477 0.580584 7.71637 0.416709 8.19466 0.692851L15.9889 5.19285ZM0.741181 8.97524L15.2301 5.09295L15.7477 7.0248L1.25882 10.9071L0.741181 8.97524Z"
            fill="#F5F5F5"
          />
        </svg>
      </Link>
      <span className=" text-3xl text-[#F5F5F5] tracking-[1.5px]">{`0${activeIndex}`}</span>
    </motion.div>
  );
};

export default Footer;

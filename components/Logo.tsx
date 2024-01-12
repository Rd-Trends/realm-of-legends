import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src="/logo.svg"
      alt=""
      width="60"
      height={72}
      priority
      quality={100}
    />
  );
};

export default Logo;

import React from 'react';
import Image from "next/image";

const Header = ({}) => {
  return (
    <header>
      <Image
        src="https://links.papareact.com/c2cdd5"
        alt={"header"}
        width={300}
        height={100}
        className="w-44 md:w-56 pb-10 md:pb-0 object-contain cursor-pointer"
      />
    </header>
  );
};

export default Header;
// by Rokas with ❤️

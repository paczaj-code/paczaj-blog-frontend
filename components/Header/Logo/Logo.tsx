import React from 'react';
import eyes from '../../../public/images/pngwing.com(5).png';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="logo__wrapper">
      <Image src={eyes} alt="eyes" height={37} />
      <h1 className="logo">
        P<span className="logo_a">a</span>CZ<span className="logo_a">a</span>J
        {/* <span className="logo_domain">wtf</span> */}
      </h1>
    </div>
  );
};

export default Logo;

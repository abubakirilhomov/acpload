import React from 'react';
import { useMediaQuery } from 'react-responsive';
import NavMobile from '../Navbar/NavMobile/NavMobile';
import NavDesktop from '../Navbar/NavDeskop/NavDesktop';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 678 });

  return (
    <div>
      {isMobile ? <NavMobile /> : <NavDesktop />}
    </div>
  );
};

export default Header;

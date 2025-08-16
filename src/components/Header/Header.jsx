import React from "react";
import { useMediaQuery } from "react-responsive";
import NavMobile from "./NavMobile/NavMoobile";
import NavDesktop from "./NavDesktop/NavDesktop";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 1380 });

  return <div>{isMobile ? <NavMobile /> : <NavDesktop />}</div>;
};

export default Header;

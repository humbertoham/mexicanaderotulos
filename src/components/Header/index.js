import React, { useState } from "react";

import { Nav, Logo, Hamburger, Menu, MenuLink, LogoN } from "./Header.styles";
import logo from "../../images/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="#acerca" className="primero">
          Acerca de
        </MenuLink>
        <hr class="menu" />

        <MenuLink href="#servicios" className="segundo">
          Servicios
        </MenuLink>
        <hr class="menu" />
        <MenuLink href="#contact" className="tercero">
          Contáctanos
        </MenuLink>
        <hr class="menu" />
      </Menu>
    </Nav>
  );
};

export default Header;

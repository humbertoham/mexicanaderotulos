import React, { useState } from "react";

import { Nav, Logo, Hamburger, Menu, MenuLink, LogoN } from "./Header.styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo href="/">
        <h1>Mexicana de Rotulos</h1>
      </Logo>
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
        <MenuLink href="#contacto" className="tercero">
          Contáctanos
        </MenuLink>
        <hr class="menu" />
      </Menu>
    </Nav>
  );
};

export default Header;

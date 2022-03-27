import React, { useEffect } from "react";
import {
  Content,
  Wrapper,
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
  Page,
} from "./Work.styles";
import Aos from "aos";
import "aos/dist/aos.css";

const MenuSec = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="servicios">
      <Content>
        <h1>Servicios</h1>
        <p>Falta esta información</p>
      </Content>
    </Wrapper>
  );
};

export default MenuSec;

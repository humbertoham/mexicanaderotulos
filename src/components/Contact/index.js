import React from "react";
import { Container, Text, Wrapper, Con } from "./Contact.styles";
import { faGoogle, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <Wrapper id="contact">
      <Container>
        <Text>
          <h1>Contáctanos</h1>
        </Text>
        <Con className="ptp">
          <h1>
            <FontAwesomeIcon className="email" size="2x" icon={faEnvelope} />
            Email: joseluisortegamendez9@gmail.com
          </h1>
        </Con>
        <Con>
          <h1>
            <FontAwesomeIcon className="whats" size="2x" icon={faWhatsapp} />{" "}
            333 118 2726
          </h1>
        </Con>

        <Con className="pt">
          <h1>
            <FontAwesomeIcon className="pin" size="2x" icon={faMapMarkerAlt} />{" "}
            Ubicación: San Sebastián el Grande Tlajomulco de Zúñiga Jalisco,
            Santos Inocentes 809 col. Col. Vistas del Valle
          </h1>
        </Con>
      </Container>
    </Wrapper>
  );
};

export default Contact;

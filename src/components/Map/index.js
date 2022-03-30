import React from "react";
import { Container, Wrapper } from "./Map.styles";

const Map = () => {
  return (
    <Wrapper>
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.5410112696027!2d-103.4371550850758!3d20.525033686273392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9df189acfd2cccc5!2zMjDCsDMxJzMwLjEiTiAxMDPCsDI2JzA1LjkiVw!5e0!3m2!1sfr!2smx!4v1648679802117!5m2!1sfr!2smx"
          width="100%"
          height="400"
        ></iframe>
      </Container>
    </Wrapper>
  );
};

export default Map;

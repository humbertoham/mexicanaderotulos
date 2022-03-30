import React from "react";
import { useEffect } from "react";
import {
  Container,
  Wrapper,
  Text,
  Logo,
  LogoN,
  Map,
  MapC,
} from "./Banner.styles";
import image from "../../images/logo.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Container>
        <MapC data-aos="fade-up">
          <Map src={image} />
        </MapC>
      </Container>
    </Wrapper>
  );
};

export default Banner;

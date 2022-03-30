import React from "react";
import { useEffect } from "react";
import { Container, Wrapper, Text, Logo, LogoN } from "./Banner.styles";
import image from "../../images/banner.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "../../images/logo.svg";
const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Container imgUrl={image}>
        <Text data-aos="fade-up">
          <Logo href="/">
            <LogoN src={logo} />
          </Logo>
          <section id="section05" class="demo">
            <a href="#acerca">
              <span></span>
            </a>
          </section>
        </Text>
      </Container>
    </Wrapper>
  );
};

export default Banner;

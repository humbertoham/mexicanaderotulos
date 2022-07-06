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
  Men,
} from "./Examples.styles";
import Aos from "aos";
import "aos/dist/aos.css";

import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";
import image6 from "../../images/image6.jpg";
import image7 from "../../images/image7.jpg";
import image8 from "../../images/image8.jpg";
import image9 from "../../images/image9.jpg";
import image10 from "../../images/image10.jpg";
import image11 from "../../images/image11.jpeg";
import image12 from "../../images/image12.jpeg";
import image13 from "../../images/image13.jpeg";
import image14 from "../../images/image14.jpeg";
import image15 from "../../images/image15.jpeg";
import image16 from "../../images/image16.jpeg";
import image17 from "../../images/image17.jpeg";
import image18 from "../../images/image18.jpeg";
import image19 from "../../images/image19.jpeg";
import image20 from "../../images/image20.jpeg";
import image21 from "../../images/image21.jpeg";
import image22 from "../../images/image22.jpeg";
import image23 from "../../images/image23.jpeg";
import image24 from "../../images/image24.jpeg";
import image25 from "../../images/image25.jpeg";
import image26 from "../../images/image26.jpeg";
import image27 from "../../images/image27.jpeg";
import image28 from "../../images/image28.jpeg";
import image29 from "../../images/image29.jpeg";
const Examples = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Content>
        <h1>Trabajos</h1>
        <p>
          Nos especializamos en pintura y rotulación de fachadas, casas,
          escuelas
        </p>
      </Content>
      <div className="container">
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image1} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image2} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image3} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image4} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image5} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image6} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image7} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image8} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image9} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image10} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image11} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image12} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image13} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image14} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image15} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image16} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image17} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image18} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image19} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image20} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image21} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image22} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image23} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image24} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image25} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image26} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image27} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image28} />
          </CardHeader>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <Page src={image29} />
          </CardHeader>
        </CardWrapper>
      </div>
    </Wrapper>
  );
};

export default Examples;

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
  Message,
} from "./Work.styles";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHardHat,
  faHouseFloodWater,
  faLightbulb,
  faPaintbrush,
  faPaintRoller,
  faPrint,
  faSign,
  faTruckPickup,
} from "@fortawesome/free-solid-svg-icons";
const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper id="servicios">
      <Content>
        <h1>Servicios</h1>
        <div className="divider"></div>
        <p>Trabajos 100% profesionales</p>
      </Content>
      <div className="container">
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faPaintbrush} />

            <CardHeading>Pintura y rotulación de fachadas</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Podemos pintar, rotular y señalizar interiores y exteriores, ya
                sean de fachadas, fachadas onduladas, tejados, suelos, naves,
                instalaciones industriales, locales comerciales, puertas de
                pabellones, etc.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faLightbulb} />

            <CardHeading>Anuncios luminosos</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Los letreros luminosos son propios de las fachadas de
                establecimientos, si bien también se encuentran en su interior
                promocionando sus productos o servicios. Estos pueden ser
                creados en acrílico, aluminio, MDF o PVC.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faSign} />
            <CardHeading>Anuncios en laminas</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Utiliza nuestras láminas de acero inoxidable y aluminio para
                publicidad y obten un producto de calidad en tus estructuras
                publicitarias.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>

        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faPrint} />
            <CardHeading>Impresión de lonas y toldos</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Lona impresa en gran formato, impresión de lonas publicitarias
                para espectaculares, banners y anuncios en punto de venta.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faPaintRoller} />
            <CardHeading>Pintura de casas y murales</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Pintar un mural en la pared de tu habitación es como tener una
                obra de arte en tu propia casa siendo única y con la opción de
                personalizarla a tu gusto.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faTruckPickup} />
            <CardHeading>Rotualción de vehiculos</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Realizamos rotulaciones de vehículos desde marcaje, rotulación
                de logotipos, etc. en vinil impreso, autoadherible recortado y
                reflejante.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faHardHat} />
            <CardHeading>Trabajos en alturas</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Realizamos todo tipo de trabajo en alturas, con las precauciones
                necesarias.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
        <CardWrapper data-aos="fade-up">
          <CardHeader>
            <FontAwesomeIcon className="Icon" icon={faHouseFloodWater} />
            <CardHeading>Impermeabilizaciones</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
              <CardOptionsNote>
                Impermeabilizaciones residenciales e industriales con materiales
                asfálticos, acrílicos, prefabricados y ecológicos.
              </CardOptionsNote>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
      </div>
      <Message href="#contact"> Contáctanos </Message>
    </Wrapper>
  );
};

export default Work;

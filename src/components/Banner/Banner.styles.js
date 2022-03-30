import styled from "styled-components";
export const Wrapper = styled.div``;

export const Container = styled.div``;
export const LogoN = styled.img`
  width: 400px;

  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;
export const Logo = styled.a`
  padding-top: 20px;
`;

export const Text = styled.div`
  font-family: "Poppins", sans-serif;
  z-index: 1;
  padding-top: 300px;
  text-align: center;
  margin: auto;
  color: var(--white);
  font-size: var(--fontSuperBig);
  p {
    font-family: "Montserrat", sans-serif;
  }
  @media (max-width: 768px) {
    padding-top: 200px;
    font-size: var(--fontBig);
  }
`;
export const Map = styled.img`
  display: block;
  height: auto;
  width: 100%;
  padding: 30px;
  margin: auto;
  @media screen and (max-width: 720px) {
    padding: 0;
  }
`;

export const MapC = styled.div`
  padding: 25px;
  height: auto;
  width: 700px;
  margin: auto;
  @media screen and (max-width: 720px) {
    padding: 0;
    width: auto;
    float: none;
  }
`;

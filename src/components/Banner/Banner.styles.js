import styled from "styled-components";
export const Wrapper = styled.div``;

export const Container = styled.div`
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-attachment: fixed;
  /* Set a specific height */
  min-height: 800px;

  /* Create the parallax scrolling effect */
  background-position: center;

  position: relative;
  z-index: 0;

  @media (max-width: 768px) {
    min-height: 600px;
    background-attachment: unset;
  }
`;
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

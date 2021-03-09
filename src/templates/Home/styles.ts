import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  place-items: center;

  background-color: #000;
`;

export const Content = styled.div`
  text-align: center;
`;

export const Logo = styled.img.attrs({
  src: "logo.jpg",
  alt: "Logo escrito zeroquinze em branco com fundo preto",
})`
  height: 33vh;
`;

export const Heading = styled.p`
  margin-top: 23px;

  color: #fff;
  font-size: 13px;
`;

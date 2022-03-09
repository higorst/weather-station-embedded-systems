import React from "react";
import { Footer, Header } from "./components";
import * as S from "./styles";

const Resume = ({ data, category }) => {
  return (
    <S.Container color={category.color}>
      <Header category={category} />
      <Footer />
      <p>{`Temperatura: ${data?.temperature}°C`}</p>
      <p>{`Umidade: ${data?.humidity}%`}</p>
      <p>{`UV: ${data?.uv.toFixed(0)}`}</p>
    </S.Container>
  );
};

export default Resume;

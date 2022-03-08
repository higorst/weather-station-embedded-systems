import React from "react";
import * as S from "./styles";

const Resume = ({ data, category }) => {
  return (
    <S.Container>
      <p>{`Temperatura: ${data.temperature}°C`}</p>
      <p>{`Umidade: ${data.humidity}%`}</p>
      <p>{`UV: ${data.uv}`}</p>
    </S.Container>
  );
};

export default Resume;

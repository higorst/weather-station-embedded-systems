import React from "react";
import * as S from "./styles";

import uvIcon from "assets/icons/uv.png";
import waterIcon from "assets/icons/water.png";
import temperatureIcon from "assets/icons/temperature.png";

const Header = ({ category, data }) => {
  return (
    <S.Container color={category.color}>
      <S.Value>
        <S.Icon src={temperatureIcon} />
        <p>{`${data?.temperature}°C`}</p>
      </S.Value>
      <S.Value>
        <S.Icon src={waterIcon} />
        <p>{`${data?.humidity}%`}</p>
      </S.Value>
      <S.Value>
        <S.Icon src={uvIcon} />
        <p>{`${data?.uv.toFixed(0)}`}</p>
      </S.Value>
    </S.Container>
  );
};

export default Header;

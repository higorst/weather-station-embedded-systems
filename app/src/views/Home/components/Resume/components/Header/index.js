import React from "react";
import { icons } from "views/Home/components/Category/icons";
import * as S from "./styles";

const Header = ({ category }) => {
  return (
    <S.Container>
      <S.Title>
        {category.id === "baixo" ? "Sem Perigo :D" : "Proteções Indicadas"}
      </S.Title>
      <S.Icons>
        {icons[category.id].map((icon) => (
          <S.Icon src={icon} />
        ))}
      </S.Icons>
    </S.Container>
  );
};

export default Header;

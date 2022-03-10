import React from "react";
import Item from "../Item";
import * as S from "./styles";

import { icons } from "./icons";

const Category = ({ color, items, active, id }) => {
  return (
    <S.Container color={color} active={active}>
      <S.Protection>
        {icons[id].map((icon) => (
          <S.Icon src={icon} />
        ))}
      </S.Protection>
      <S.Items>
        {items.map((item) => (
          <Item item={item} active={active} />
        ))}
      </S.Items>
    </S.Container>
  );
};

export default Category;

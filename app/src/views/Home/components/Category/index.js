import React from "react";
import Item from "../Item";
import * as S from "./styles";

import { icons } from "./icons";
import ANIMATION from "./animation.config";

const Category = ({ color, items, title, active, id }) => {
  return (
    <S.Container color={color} active={active}>
      <S.Protection>
        {icons[id].map((icon) => (
          <S.Icon
            src={icon}
            active={active}
            initial="hidden"
            animate="visible"
            variants={ANIMATION}
            whileHover={{
              scale: 1.5,
            }}
          />
        ))}
      </S.Protection>
      <S.Items>
        {items.map((item) => (
          <Item item={item} active={active} />
        ))}
        <S.Title>{title}</S.Title>
      </S.Items>
    </S.Container>
  );
};

export default Category;

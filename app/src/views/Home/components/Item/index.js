import React from "react";
import * as S from "./styles";

const Item = ({ item, active }) => {
  return (
    <S.Container color={item.color} active={active}>
      <p>{item.title}</p>
    </S.Container>
  );
};

export default Item;

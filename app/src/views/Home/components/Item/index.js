import React from "react";
import * as S from "./styles";

const Item = ({ item }) => {
  return (
    <S.Container color={item.color}>
      <p>{item.title}</p>
    </S.Container>
  );
};

export default Item;

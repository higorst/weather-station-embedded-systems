import React from "react";
import Item from "../Item";
import * as S from "./styles";

const Category = ({ color, length, items }) => {
  return (
    <S.Container color={color} length={length}>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </S.Container>
  );
};

export default Category;

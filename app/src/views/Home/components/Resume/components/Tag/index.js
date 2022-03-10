import React from "react";
import * as S from "./styles";

const Tag = ({ category }) => {
  return (
    <S.Tag color={category.color}>
      <p>{category.title}</p>
    </S.Tag>
  );
};

export default Tag;

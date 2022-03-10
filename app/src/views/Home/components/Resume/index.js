import React from "react";
import { Footer, Header, Tag } from "./components";
import * as S from "./styles";

const Resume = ({ data, category }) => {
  return (
    <S.Container color={category.color}>
      <Tag category={category} />
      <Header category={category} data={data} />
      <Footer category={category} />
    </S.Container>
  );
};

export default Resume;

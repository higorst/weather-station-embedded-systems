import { transparentize } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";

const colorsGradient = ["#DDEFBB", "#FFEEEE"];

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "main";

  overflow: hidden;
  background-image: linear-gradient(
    90deg,
    ${({ color }) => (color ? transparentize(0.6, color) : colorsGradient[0])}
      40%,
    ${colorsGradient[1]} 94%
  );

  height: 100%;

  ${themes.medias.lessThan("lesshd")`
    background-image: linear-gradient(180deg, ${colorsGradient[1]} 40%, ${({
    color,
  }) =>
    (color ? transparentize(0.6, color) : colorsGradient[0]) ||
    colorsGradient[0]} 94%);
  `}
`;

export const Main = styled.main`
  grid-area: main;
  position: relative;
`;

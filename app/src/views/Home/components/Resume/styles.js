import { transparentize } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";

export const Container = styled.div`
  transition: box-shadow 0.3s, background-color 0.3s;

  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 40px;
  padding-top: 0;
  border-radius: 8px;

  width: 60%;
  margin: 0 30px 0 0;

  box-shadow: ${({ color }) => color} 0px 2px 4px,
    ${({ color }) => color} 0px 7px 13px -3px,
    ${({ color }) => color} 0px -3px 0px inset;

  background-color: ${({ color }) => transparentize(0.8, color)};

  ${themes.medias.lessThan("lesshd")`
    margin: 20px 10% 30px;
    padding: 20px;
  `}
`;

import { size } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";

export const Tag = styled.div`
  width: ${size(120)};
  position: relative;
  background-color: ${({ color }) => color};
  top: -20px;
  right: -80%;

  ${themes.medias.lessThan("lesshd")`
    top: -30px;
  `}

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 10px;
  border-radius: 8px;
  background-color: ${({ color }) => color};

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  p {
    text-transform: uppercase;
    font-weight: ${themes.fonts.bold};
    color: ${themes.colors.white};
  }
`;

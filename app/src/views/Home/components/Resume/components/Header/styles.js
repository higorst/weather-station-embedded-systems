import { motion } from "framer-motion";
import { rem, size, transparentize } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  p {
    color: ${({ color }) => color};
  }
`;

export const Value = styled.div`
  border-radius: 20px;
  padding: 20px;
  background-color: ${transparentize(0.5, "white")};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  p {
    line-height: 24px;
    font-size: ${rem(30)};
    font-family: ${themes.fonts.bold};
    ${themes.medias.lessThan("lesshd")`
      font-size: ${rem(45)};
    `}
  }

  ${themes.medias.lessThan("lesshd")`
    padding: 35px;
  `}
`;

export const Icon = styled(motion.img)`
  ${size(60)}
  margin-bottom: 20px;

  ${themes.medias.lessThan("lesshd")`
    width: 100px;
    height: 100px;
  `}
`;

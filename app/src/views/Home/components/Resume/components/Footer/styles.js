import { motion } from "framer-motion";
import { rem, size } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;

  padding: 20px;
  margin-top: 20px;

  border-radius: 20px;
  background: rgba(255, 255, 255, 0.36);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border: 1px dashed ${({ color }) => color};
  backdrop-filter: blur(4.3px);
  -webkit-backdrop-filter: blur(4.3px);
`;

export const Title = styled.h2`
  line-height: 24px;
  font-size: ${rem(16)};
  font-family: ${themes.fonts.bold};

  color: ${themes.colors.gray};

  text-align: left;
  margin-bottom: 20px;

  ${themes.medias.lessThan("lesshd")`
    font-size: ${rem(14)};
    text-align: center;
  `}
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Icon = styled(motion.img)`
  ${size(50)}
  margin-left:30px;
  :first-child {
    margin-left: 0;
  }
`;

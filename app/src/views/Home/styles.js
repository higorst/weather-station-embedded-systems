import styled from "styled-components";
import { rem } from "polished";
import themes from "Provider/themes";
import { motion } from "framer-motion";
import { NavLink } from "components";

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;

  align-items: center;

  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 30px;

  ${themes.medias.lessThan("lesshd")`
    margin-top: 20px;
    // height: 100%;
    flex-direction: column;
  `}
`;

export const Title = styled(motion.h1)`
  line-height: 24px;
  font-size: ${rem(30)};
  font-family: ${themes.fonts.bold};
  text-transform: uppercase;

  color: ${themes.colors.gray};

  ${themes.medias.lessThan("hd")`
    font-size: ${rem(26)};
    margin-top: 50px;
  `}
  text-align: center !important;

  span {
    margin-bottom: 20px;
    line-height: 50px;
    text-decoration-line: underline;
    text-decoration-style: double;
  }
`;

export const WrapperItems = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  ${themes.medias.lessThan("lesshd")`
    margin-top: 30px;
  `}
`;

export const Link = styled(NavLink)``;

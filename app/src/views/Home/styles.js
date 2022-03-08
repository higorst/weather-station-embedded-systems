import styled from "styled-components";
import { rem } from "polished";
import themes from "Provider/themes";
import { motion } from "framer-motion";
import { NavLink } from "components";

export const Title = styled(motion.h1)`
  line-height: 24px;
  font-size: ${rem(24)};
  font-family: ${themes.fonts.bold};

  color: ${themes.colors.gray};

  ${themes.medias.lessThan("hd")`
    font-size: ${rem(20)};
  `}

  span {
    margin-bottom: 20px;
    line-height: 50px;
    text-decoration-line: underline;
    text-decoration-style: double;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const WrapperItems = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  padding-bottom: 20px;
`;

export const Link = styled(NavLink)``;

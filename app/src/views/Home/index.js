import React from "react";

import { Container } from "components";

import * as S from "./styles";
import { motion } from "framer-motion";

import animate from "./animation.config";

function Home() {
  return (
    <Container footer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animate.heading.container}
      >
        <S.Title variants={animate.heading.titles}>
          <span>Bem-vindo</span>
        </S.Title>
        <S.Title variants={animate.heading.titles}>
          Sistema de gerenciamento de estação meteorológica
        </S.Title>
      </motion.div>
      <S.WrapperItems
        initial="hidden"
        animate="visible"
        variants={animate.shortcuts.container}
      ></S.WrapperItems>
    </Container>
  );
}

export default Home;

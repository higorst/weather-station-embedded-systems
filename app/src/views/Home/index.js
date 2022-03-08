import React from "react";

import { Container } from "components";

import * as S from "./styles";
import { motion } from "framer-motion";

import animate from "./animation.config";

import { indexes, categories, data } from "./items";
import { Category, Resume } from "./components";

function Home() {
  return (
    <Container footer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animate.heading.container}
      >
        <S.Title variants={animate.heading.titles}>
          Sistema de gerenciamento de estação meteorológica
        </S.Title>
      </motion.div>
      <S.Container>
        <Resume
          data={data}
          category={
            categories.filter(
              (item) =>
                item.id ===
                (data.uv < 3
                  ? "baixo"
                  : data.uv < 6
                  ? "moderado"
                  : data.uv < 8
                  ? "alto"
                  : data.uv < 11
                  ? "muito-alto"
                  : "extremo")
            )[0]
          }
        />
        <S.WrapperItems
          initial="hidden"
          animate="visible"
          variants={animate.shortcuts.container}
        >
          {categories.map((item) => (
            <Category
              key={item.id}
              color={item.color}
              length={item.length}
              id={item.id}
              items={
                item.id === "baixo"
                  ? indexes.slice(0, 2)
                  : item.id === "moderado"
                  ? indexes.slice(2, 5)
                  : item.id === "alto"
                  ? indexes.slice(5, 7)
                  : item.id === "muito-alto"
                  ? indexes.slice(7, 10)
                  : indexes.slice(10)
              }
            >
              <p>{item.title}</p>
            </Category>
          ))}
        </S.WrapperItems>
      </S.Container>
    </Container>
  );
}

export default Home;

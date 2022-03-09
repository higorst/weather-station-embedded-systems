import React, { useState, useEffect } from "react";

import { Container } from "components";

import * as S from "./styles";
import { motion } from "framer-motion";

import animate from "./animation.config";

import { indexes, categories } from "./items";
import { Category, Resume } from "./components";
import { socket } from '../../services/socket';

function Home() {
  
  const [values, setValues] = useState(null);

  useEffect(() => {
    socket.on('updateValues', data => {
      setValues(data);
    });
  }, []);

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
          data={values}
          category={
            categories.filter(
              (item) =>
                item.id ===
                (values?.uv < 3
                  ? "baixo"
                  : values?.uv < 6
                  ? "moderado"
                  : values?.uv < 8
                  ? "alto"
                  : values?.uv < 11
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

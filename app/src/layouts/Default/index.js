import React, { useMemo } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

import * as S from "./styles";
import { useLocation } from "react-router-dom";
import { categories } from "views/Home/items";

function Default({ children, pageTitle }) {
  const location = useLocation();

  const category = useMemo(() => {
    const idCategory = location.search.replace("?category=", "");
    console.log(location.search, idCategory);
    return categories.filter((item) => item.id === idCategory)[0];
  }, [location]);

  return (
    <>
      {pageTitle && (
        <Helmet>
          <title>FPS | {pageTitle}</title>
        </Helmet>
      )}

      <S.Container color={category?.color}>
        <S.Main>{children}</S.Main>
      </S.Container>
    </>
  );
}

Default.propTypes = {
  pageTitle: PropTypes.string,
};

export default Default;

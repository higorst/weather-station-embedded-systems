import React from "react";
import { Tooltip, Zoom } from "@material-ui/core";
import { icons } from "views/Home/components/Category/icons";
import * as S from "./styles";
import ANIMATION from "./animation.config";

import { withStyles } from "@material-ui/core/styles";

const Footer = ({ category }) => {
  const CustomTooltip = withStyles({
    tooltip: {
      color: "white",
      backgroundColor: category.color,
      fontSize: 16,
      padding: 20,
      borderRadius: 20,
    },
    arrow: {
      color: category.color,
    },
  })(Tooltip);
  return (
    <S.Container color={category.color}>
      <S.Title>
        {category.id === "baixo" ? "Sem Perigo :D" : "Proteções Indicadas"}
      </S.Title>
      <S.Icons>
        {icons[category.id].map((icon) => (
          <CustomTooltip
            arrow
            TransitionComponent={Zoom}
            placement="top-start"
            title={icon.msg}
          >
            <S.Icon
              src={icon.icon}
              initial="hidden"
              animate="visible"
              variants={ANIMATION}
              whileHover={{ scale: 1.5 }}
            />
          </CustomTooltip>
        ))}
      </S.Icons>
    </S.Container>
  );
};

export default Footer;

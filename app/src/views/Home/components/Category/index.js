import React from "react";
import { Tooltip, Zoom } from "@material-ui/core";
import Item from "../Item";
import * as S from "./styles";

import { icons } from "./icons";
import ANIMATION from "./animation.config";

import { withStyles } from "@material-ui/core/styles";

const Category = ({ color, items, title, active, id }) => {
  const CustomTooltip = withStyles({
    tooltip: {
      color: "white",
      backgroundColor: color,
      fontSize: 16,
      padding: 20,
      borderRadius: 20,
    },
    arrow: {
      color: color,
    },
  })(Tooltip);
  return (
    <S.Container color={color} active={active}>
      <S.Protection>
        {icons[id].map((icon) => (
          <CustomTooltip
            arrow
            TransitionComponent={Zoom}
            placement="top-start"
            title={icon.msg}
          >
            <S.Icon
              src={icon.icon}
              active={active}
              initial="hidden"
              animate="visible"
              variants={ANIMATION}
              whileHover={{
                scale: 1.5,
              }}
            />
          </CustomTooltip>
        ))}
      </S.Protection>
      <S.Items>
        {items.map((item) => (
          <Item item={item} active={active} />
        ))}
        <S.Title>{title}</S.Title>
      </S.Items>
    </S.Container>
  );
};

export default Category;

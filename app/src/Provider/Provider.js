import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./global";
import theme from "./themes";

const Provider = (props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {props.children}
  </ThemeProvider>
);

export default Provider;

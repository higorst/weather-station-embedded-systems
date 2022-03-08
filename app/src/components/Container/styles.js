import styled, { css } from "styled-components";
import themes from "Provider/themes";

const styles = css`
  margin: 5% 10%;
  max-width: 1600px;

  ${themes.medias.lessThan("hd")`
    padding: 0;
    margin: 2% 5%;
  `}
`;

export const Section = styled.section`
  ${styles}
`;

export const Div = styled.div`
  ${styles}
`;

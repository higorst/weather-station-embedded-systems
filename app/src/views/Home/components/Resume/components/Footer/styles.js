import themes from "Provider/themes";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  margin: 10%;
  padding: 40px;
  border-radius: 8px;

  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  ${themes.medias.lessThan("lesshd")`
    margin: 20px 10% 30px;
    padding: 20px;
  `}
`;

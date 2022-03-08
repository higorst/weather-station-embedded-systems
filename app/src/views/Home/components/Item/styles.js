import themes from "Provider/themes";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ color }) => color};

  :first-child {
    margin: 0;
  }

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  ${themes.medias.lessThan("lesshd")`
    padding: 10px;
    margin-left: 10px;
  `}
`;

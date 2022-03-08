import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;
  text-align: center;

  padding: 20px;
  margin-right: ${({ length }) => 100 - length}%;
  margin-left: 10%;
  border-radius: 4px 20px 20px 4px;

  background-color: ${({ color }) => color};

  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

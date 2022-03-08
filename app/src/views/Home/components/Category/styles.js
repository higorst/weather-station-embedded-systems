import { size } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-right: auto;
  flex-direction: row;
  justify-content: flex-end;

  padding: 5px 20px;
  width: ${({ length }) => length}%;
  border-radius: 4px 20px 20px 4px;

  background-color: ${({ color }) => color};

  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

export const Items = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  padding: 10px 20px;
  border-radius: 20px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;

export const Protection = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  padding: 10px 20px;
  border-radius: 20px;

  margin-right: auto;

  /* box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px; */
`;

export const Icon = styled.img`
  ${size(50)}
  border-radius: 20px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  margin-left: 20px;
  :first-child {
    margin-left: 0;
  }
`;

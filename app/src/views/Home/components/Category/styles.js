import { size, transparentize } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  transition: width 0.2s, padding 0.1s, transform 0.5s, box-shadow 0.3s;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  padding: 5px 5px 5px 20px;
  border-radius: 4px 20px 20px 4px;

  background: ${({ color }) => transparentize(0.7, color)};
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  backdrop-filter: blur(4.3px);
  -webkit-backdrop-filter: blur(4.3px);

  ${themes.medias.lessThan("lesshd")`
    padding: 3px 3px 3px 10px;
  `}

  transform: scale(0.8);
  width: 90%;
  height: 80px;
  ${({ active }) =>
    active &&
    css`
      margin-top: 25px;
      margin-bottom: 25px;

      height: 100px;

      :first-child {
        margin-top: 0;
      }
      :last-child {
        margin-bottom: 0;
      }

      transform: scale(1);
      box-shadow: 0 4px 30px ${({ color }) => color},
        ${({ color }) => color} 0px 1px 3px 0px,
        ${({ color }) => color} 0px 0px 0px 1px;
    `}

  :hover {
    width: ${({ active }) => (active ? 110 : 100)}%;
    padding: 0 20px;
  }
`;

export const Items = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  padding: 10px 20px;
  border-radius: 20px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgb(204, 219, 232) 0px 18px 36px -18px inset;

  background: rgba(255, 255, 255, 0.19);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.4px);
  -webkit-backdrop-filter: blur(7.4px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const Protection = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  padding: 10px 20px;
  border-radius: 20px;

  margin-right: auto;
`;

export const Icon = styled.img`
  ${size(50)}
  border-radius: 20px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  background-color: ${transparentize(0.55, "white")};

  margin-left: 20px;
  :first-child {
    margin-left: 0;
  }

  ${themes.medias.lessThan("lesshd")`
    padding: 5px 10px;
  `}
`;

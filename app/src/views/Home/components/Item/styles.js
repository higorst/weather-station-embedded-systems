import { rem, size } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ active }) => size(active ? 50 : 40)}
  margin: auto;

  margin-left: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ color }) => color};

  :first-child {
    margin-left: 0;
  }

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  ${themes.medias.lessThan("lesshd")`
    margin-left: 10px;
    width: ${({ active }) => (active ? 70 : 60)}px;
    height: ${({ active }) => (active ? 70 : 60)}px;
  `}

  p {
    font-size: ${rem(20)};
    font-family: ${themes.fonts.bold};
    text-transform: uppercase;
    align-self: center;
    text-align: center;
    margin: 0;

    color: ${themes.colors.gray};
  }
`;

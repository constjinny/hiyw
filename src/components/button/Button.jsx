import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { BUTTON_SIZE, BUTTON_THEME } from "../../type/themeType";

const buttonSizeStyle = {
  [BUTTON_SIZE.s]: css`
    width: 100px;
    height: 20px;
  `,
  [BUTTON_SIZE.m]: css``,
  [BUTTON_SIZE.l]: css``,
};

const buttonThemeStyle = {
  [BUTTON_THEME.SquareBg]: css``,
  [BUTTON_THEME.RoundBg]: css``,
  [BUTTON_THEME.SquareBorder]: css``,
  [BUTTON_THEME.RoundBorder]: css``,
};

export function Button({ onClick, size, theme, text }) {
  const sizeStyle = buttonSizeStyle[size];
  const themeStyle = buttonThemeStyle[theme];
  return (
    <ButtonComponent
      type="button"
      onClick={onClick}
      sizeStyle={sizeStyle}
      themeStyle={themeStyle}
    >
      {text}
    </ButtonComponent>
  );
}

Button.defaultProps = {
  onClick: () => console.log("click button"),
  size: BUTTON_SIZE.s,
  theme: BUTTON_THEME.SquareBg,
  text: "버튼",
};

const ButtonComponent = styled.button`
  ${({ sizeStyle }) => sizeStyle}
  ${({ themeStyle }) => themeStyle}
`;

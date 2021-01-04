import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { BUTTON_SIZE, BUTTON_COLOR } from "../../type/themeType";

const buttonSizeStyle = {
  [BUTTON_SIZE.s]: css`
    padding: 10px 20px;
  `,
  [BUTTON_SIZE.m]: css``,
  [BUTTON_SIZE.l]: css``,
  [BUTTON_SIZE.f]: css`
    width: 100%;
    padding: 10px 20px;
  `,
};
const buttonColorStyle = {
  [BUTTON_COLOR.white]: css`
    background: #ffffff;
    box-shadow: 6px -6px 12px #d9d9d9, -6px 6px 12px #ffffff;
  `,
  [BUTTON_COLOR.gray]: css`
    background: #d9d9d9;
    box-shadow: 6px -6px 12px #b8b8b8, -6px 6px 12px #fafafa;
    color: #fafafa;
  `,
};

export function Button({ onClick, size, color, text }) {
  const sizeStyle = buttonSizeStyle[size];
  const colorStyle = buttonColorStyle[color];
  return (
    <ButtonComponent
      type="button"
      onClick={onClick}
      sizeStyle={sizeStyle}
      colorStyle={colorStyle}
    >
      {text}
    </ButtonComponent>
  );
}

Button.defaultProps = {
  onClick: () => console.log("click button"),
  size: BUTTON_SIZE.s,
  color: BUTTON_COLOR.white,
  text: "버튼",
};

const ButtonComponent = styled.button`
  ${({ sizeStyle }) => sizeStyle}
  ${({ colorStyle }) => colorStyle}
  font-size:18px;
  border-radius: 50px;
  box-sizing: border-box;
`;

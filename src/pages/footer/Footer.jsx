import * as React from "react";
import styled from "@emotion/styled";

export function Footer() {
  return <FooterWrapper>footer</FooterWrapper>;
}

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 0 100px;
  text-align: center;
  box-sizing: border-box;
`;

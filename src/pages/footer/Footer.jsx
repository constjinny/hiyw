import * as React from "react";
import styled from "@emotion/styled";

export function Footer() {
  return (
    <FooterWrapper>
      copyright &copy; 2012 by{" "}
      <a href="https://github.com/constjinny" target="_brank">
        youJin
      </a>
      ,{" "}
      <a href="https://github.com/xururuca9797" target="_brank">
        yuRim
      </a>
      . All Page Content is property of{" "}
      <a href="https://github.com/constjinny" target="_brank">
        youJin
      </a>
      ,{" "}
      <a href="https://github.com/xururuca9797" target="_brank">
        yuRim
      </a>{" "}
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 60px;
  padding: 0 100px;
  text-align: center;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
  a {
    text-decoration: underline;
  }
`;

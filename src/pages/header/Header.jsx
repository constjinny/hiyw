import * as React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export function Header() {
  return (
    <HeaderWrapper>
      <LayoutLeft>
        <Link to="/">Home</Link>
      </LayoutLeft>
      <div>
        <Link to="/feed">Feed</Link>
        <Link to="/my">My</Link>
      </div>
      <LayoutRight>
        <Link to="/login">login</Link>
      </LayoutRight>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 100px;
  text-align: center;
  box-sizing: border-box;
  a,
  button {
    display: inline-block;
    padding: 0 20px;
    line-height: 50px;
  }
`;
const LayoutLeft = styled.div`
  position: absolute;
  top: 0;
  left: 20px;
`;
const LayoutRight = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
`;

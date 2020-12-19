import React, {useState} from "react";
import styled from "@emotion/styled";

export function Skinselectbox(){

  const [selectToggle, setSelectToggle] = useState(false);
  const clickSelectBox = ()=>{
    setSelectToggle(!selectToggle);
  }

  return (
    <SkinselectboxWrapper>
      <SkinselectboxInner onClick={clickSelectBox}>
        <SkinselectboxSelect selectToggle={selectToggle}>선택</SkinselectboxSelect>
        <SkinselectboxOption selectToggle={selectToggle} onClick="clickOption">
          <li className="selected">선택</li>
          <li>폰트01</li>
          <li>폰트02</li>
          <li>폰트03</li>
          <li>폰트04</li>
          <li>폰트05</li>
          <li>폰트06</li>
          <li>폰트07</li>
          <li>폰트08</li>
          <li>폰트09</li>
          <li>폰트10</li>
        </SkinselectboxOption>
      </SkinselectboxInner>
    </SkinselectboxWrapper>
  );
};

const SkinselectboxWrapper = styled.div``;
const SkinselectboxInner = styled.div`
  width: 200px;
`;
const SkinselectboxSelect = styled.div`
  position: relative;
  border: 2px solid #ccc;
  box-sizing: border-box;
  padding: 0 10px;
  height: 40px;
  line-height: 35px;
  font-size: 16px;
  background-color: #fff;
  cursor: pointer;
  &:after {
    content: ${(props)=>props.selectToggle?'"▲"':'"▼"'};
    position: absolute;
    top: 0;
    right: 10px;
  }
`;
const SkinselectboxOption = styled.ul`
  width: 100%;
  max-height: ${(props)=>props.selectToggle?'200px':'0px'};
  overflow-y: auto;
  cursor: pointer;
  border: 2px solid #ccc;
  opacity: ${(props)=>props.selectToggle?'1':'0'};
  &::-webkit-scrollbar {
    width: 8px;
    background-color: #333;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
  }
  > li:hover {
    background-color: #ccc;
  }
  > .selected {
    background-color: #ccc;
  }
`;

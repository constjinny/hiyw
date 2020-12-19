import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import {FONT_FAMILY_LIST} from "../../type/fontType"

export function SelectBox() {
  const [selectToggle, setSelectToggle] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState("notoSansKR");

  // useEffect(()=>{
  //   console.log('selectedOptionId',selectedOptionId)
  // },[selectedOptionId])

  const clickSelectBox = () => setSelectToggle(!selectToggle);
  const clickOption = (id)=>setSelectedOptionId(id);

  const createSelectBoxFont = FONT_FAMILY_LIST.map((data, index)=>{
    if(data.id === selectedOptionId){
      return(
        <SelectBoxOptionItem key={index} id={data.id} color={"red"}
        font={data.css} onClick={()=>{clickOption(data.id)}}>{data.id}</SelectBoxOptionItem>
      );
    }else{
      return(
        <SelectBoxOptionItem key={index} id={data.id} color={"#000"} font={data.css} onClick={()=>{clickOption(data.id)}}>{data.id}</SelectBoxOptionItem>
      );
    }
  }
  );

  return (
    <SelectBoxWrapper>
      <SelectBoxInner onClick={clickSelectBox}>
        <SelectBoxSelect selectToggle={selectToggle}>
      {selectedOptionId}</SelectBoxSelect>
        <SelectBoxOption selectToggle={selectToggle}>
          {createSelectBoxFont}
        </SelectBoxOption>
      </SelectBoxInner>
    </SelectBoxWrapper>
  );
}

const SelectBoxWrapper = styled.div``;
const SelectBoxInner = styled.div`
  width: 200px;
`;
const SelectBoxSelect = styled.div`
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
    content: ${(props) => (props.selectToggle ? '"▲"' : '"▼"')};
    position: absolute;
    top: 0;
    right: 10px;
  }
`;
const SelectBoxOption = styled.ul`
  width: 100%;
  max-height: ${(props) => (props.selectToggle ? "200px" : "0px")};
  overflow-y: auto;
  cursor: pointer;
  border: 2px solid #ccc;
  opacity: ${(props) => (props.selectToggle ? "1" : "0")};
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
const SelectBoxOptionItem = styled.li`
  color: ${(props)=>(props.color)};
  ${(props)=>(props.font)};
`
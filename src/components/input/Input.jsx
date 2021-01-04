import * as React from "react";
import styled from "@emotion/styled";

export function Input({ label, type, id, title, placeholder, getValue }) {
  const [value, setValue] = React.useState("");

  const onChangeValue = (value) => {
    setValue(value);
    getValue(value);
  };

  return (
    <WrapperStyle>
      <LabelTitleStyle>{title}</LabelTitleStyle>
      <LabelStyle htmlFor={id}>
        <InputStyle
          type={type}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChangeValue(event.target.value)}
        />
      </LabelStyle>
    </WrapperStyle>
  );
}

Input.defaultProps = {
  label: true,
  type: "text",
  id: "id",
  placeholder: "placeholder",
  getValue: (value) => console.log("getValue"),
};

const WrapperStyle = styled.div`
  display: flex;
  margin-top: 30px;
  text-align: left;
  & + & {
    margin-top: 30px;
  }
`;

const LabelStyle = styled.label`
  overflow: hidden;
  width: 100%;
  padding: 5px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

const LabelTitleStyle = styled.strong`
  display: block;
  width: 180px;
  font-size: 18px;
  line-height: 46px;
`;

const InputStyle = styled.input`
  width: 100%;
  height: 100%;
  padding: 5px 20px;
  font-size: 18px !important;
  line-height: 25px;
  border: 0 none;
  background-color: none;
  box-sizing: border-box;
`;

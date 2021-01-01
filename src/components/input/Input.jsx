import * as React from "react";
import styled from "@emotion/styled";

export function Input({ label, type, id, title, placeholder, getValue }) {
  const [value, setValue] = React.useState("");

  const onChangeValue = (value) => {
    setValue(value);
    getValue(value);
  };

  return (
    <LabelStyle htmlFor={id}>
      <LabelTitleStyle>{title}</LabelTitleStyle>
      <InputStyle
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChangeValue(event.target.value)}
      />
    </LabelStyle>
  );
}

Input.defaultProps = {
  label: true,
  type: "text",
  id: "id",
  placeholder: "placeholder",
  getValue: (value) => console.log("getValue"),
};

const LabelStyle = styled.label`
  display: flex;
  margin-top: 30px;
  text-align: left;
  & + & {
    margin-top: 30px;
  }
`;

const LabelTitleStyle = styled.strong`
  display: block;
  width: 150px;
  font-size: 18px;
`;

const InputStyle = styled.input`
  width: 100%;
`;

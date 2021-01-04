import * as React from "react";
import styled from "@emotion/styled";

export function NoteBox({ data }) {
  const [newValue, setNewValue] = React.useState(
    data.contens ? data.contens : ""
  );

  return (
    <NoteBoxStyle
      mainColor={data.noteTheme.mainColor ? data.noteTheme.mainColor : "#fff"}
      Shadowcolor1={
        data.noteTheme.shadowColor1 ? data.noteTheme.shadowColor1 : "#d9d9d9"
      }
      Shadowcolor2={
        data.noteTheme.shadowColor2 ? data.noteTheme.shadowColor2 : "#fff"
      }
    >
      <TextAreaStyle
        name="contents"
        value={newValue}
        font={data.font.value}
        fontColor={data.noteTheme.fontColor ? data.noteTheme.fontColor : "#999"}
        onChange={(event) => setNewValue(event.target.value)}
      />
    </NoteBoxStyle>
  );
}

NoteBox.defaultProps = {
  data: {
    id: "sample01",
    contens: "봄처럼 \n마음은 따뜻하게",
    font: { id: "gaegu", value: "'Gaegu', cursive" },
    noteTheme: {
      id: "showerRain",
      mainColor: "#fff",
      shadowColor1: "#d9d9d9",
      shadowColor2: "#fff",
      fontColor: "#000",
    },
  },
};

const NoteBoxStyle = styled.div`
  overflow: hidden;
  position: relative;
  width: 280px;
  height: 280px;
  margin: 10px 10px;
  box-sizing: border-box;
  overflow: hidden;
  align-items: center;
  border-radius: 50px;
  background-color: ${({ mainColor }) => mainColor};
  box-shadow: ${({ Shadowcolor1, Shadowcolor2 }) =>
    `20px 20px 60px ${Shadowcolor1}, -20px -20px 60px ${Shadowcolor2}`};
`;

const TextAreaStyle = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 30px;
  border: none;
  font-size: 18px;
  font-family: ${({ font }) => font};
  box-sizing: border-box;
  resize: none;
  color: ${({ fontColor }) => fontColor};
  &::placeholder {
    color: transparent;
    height: 100%;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

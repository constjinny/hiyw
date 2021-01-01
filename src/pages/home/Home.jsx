import * as React from "react";
import styled from "@emotion/styled";
import { NOTE_HOME_LIST } from "../../type/noteType";

export function Home() {
  const placeHolder = [
    "봄처럼 \n마음은 따뜻하게",
    "여름처럼 \n사랑은 뜨겁게",
    "가을처럼 \n베풂은 풍성하게",
    "겨울처럼 \n미움은 얼어붙게",
  ];
  const createHomeNoteList = NOTE_HOME_LIST.map((data, index) => {
    return (
      <HomeNoteItem key={index} id={data.id} bg={data.img}>
        <HomeNoteItemTextarea
          name="message"
          value={placeHolder[index]}
          font={data.css}
        />
      </HomeNoteItem>
    );
  });
  return (
    <HomeWrapper>
      <HomeNote>
        <HomeNoteList>{createHomeNoteList}</HomeNoteList>
      </HomeNote>
      <HomeIntroduction>
        <h2>
          HIYW
          <br />
          <span>H</span>ow <span>I</span>s <span>Y</span>our <span>W</span>
          eather
        </h2>
        <p>날씨에 따라 배경이 바뀌는 멋진 일기 어플리케이션.</p>
      </HomeIntroduction>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main`
  display: inline-flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const HomeNote = styled.section`
  width: 600px;
`;
const HomeNoteList = styled.ul`
  width: 100%;
`;
const HomeNoteItem = styled.li`
  float: left;
  overflow: hidden;
  position: relative;
  width: 280px;
  height: 280px;
  margin: 10px 10px;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #000;
  align-items: center;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    opacity: 0.4;
  }
`;
const HomeNoteItemTextarea = styled.textarea`
  position: absolute;
  width: 100%;
  height: auto;
  padding: 30px;
  text-align: center;
  border: none;
  font-size: 18px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0);
  z-index: 1;
  color: #fff;
  ${(props) => props.font};
  resize: none;
  &::placeholder {
    color: #fff;
    height: 100%;
  }
  align-items: center;
`;
const HomeIntroduction = styled.div`
  width: 600px;
  > h2 {
    font-size: 2rem;
    margin-top: 2rem;
  }
  > h2 > span {
    color: #fff;
  }
`;

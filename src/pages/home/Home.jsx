import * as React from "react";
import styled from "@emotion/styled";
import { NOTE_HOME_LIST } from "../../type/noteType";

export function Home() {
  const createHomeNoteList = NOTE_HOME_LIST.map((data, index) => {
    return (
      <HomeNoteItem key={index} id={data.id} bg={data.img}>
        <HomeNoteItemTextarea
          name="message"
          placeholder="Enter here to see the text.
          텍스트를 보려면 여기에 입력하십시오."
          font={data.css}
        />
      </HomeNoteItem>
    );
  });
  return (
    <HomeWrapper>
      <HomeNote>
        <h2>제목</h2>
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

const HomeWrapper = styled.main``;
const HomeNote = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: 80rem;
`;
const HomeNoteList = styled.ul`
  display: flex;
`;
const HomeNoteItem = styled.li`
  overflow: hidden;
  &:nth-of-type(2) {
    margin: 0 1rem;
  }
  position: relative;
  width: 33%;
  height: 25rem;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #000;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    opacity: 0.5;
  }
`;
const HomeNoteItemTextarea = styled.textarea`
  position: absolute;
  width: 100%;
  padding: 1rem;
  height: 100%;
  box-sizing: border-box;
  border: none;
  font-size: 1.5rem;
  background-color: rgba(255, 255, 255, 0);
  z-index: 1;
  color: #fff;
  ${(props) => props.font};
  &::placeholder {
    color: #fff;
  }
`;
const HomeIntroduction = styled.div`
  text-align: center;
  > h2 {
    font-size: 2rem;
    margin-top: 2rem;
  }
  > h2 > span {
    color: #fff;
  }
`;

import * as React from "react";
import styled from "@emotion/styled";
import { SAMPLE_NOTE_LIST } from "../../type/noteSampleType";
import { NoteBox } from "../../components";

export function Home() {
  const createHomeNoteList = SAMPLE_NOTE_LIST.map((data, index) => {
    return (
      <HomeNoteItem key={index}>
        <NoteBox data={data} />
      </HomeNoteItem>
    );
  });
  return (
    <HomeWrapper>
      <HomeNote>
        <HomeNoteList>{createHomeNoteList}</HomeNoteList>
      </HomeNote>
      <HomeIntroduction>
        <HomeTitleWrapper>
          <h1>
            How
            <br />
            Is
            <br />
            Your
            <br />
            <div>Weather?</div>
          </h1>
          <span>
            <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" />
          </span>
          <span>
            <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="" />
          </span>
          <span>
            <img src="http://openweathermap.org/img/wn/11d@2x.png" alt="" />
          </span>
        </HomeTitleWrapper>
        <p>
          내 감정의 날씨를 기록하는 <br />
          감성 일기 어플리케이션
        </p>
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
`;
const HomeIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding-left: 30px;
  align-items: top;

  > p {
    margin-top: 20px;
    font-size: 20px;
  }
`;
const HomeTitleWrapper = styled.div`
  overflow: hidden;
  position: relative;
  > h1 {
    font-size: 64px;
    padding: 0 10px;
    > div {
      color: #fff;
      margin: 0 -10px;
      padding: 0 10px;
      background: #000;
    }
  }
  > span {
    position: absolute;
    right: 0;
    height: 94px;
    bottom: -100px;
  }
  > span:nth-of-type(1) {
    animation: rolingEmotion 4.6s ease-out 0s infinite;
  }
  > span:nth-of-type(2) {
    animation: rolingEmotion 4.6s ease-out 1.53s infinite;
  }
  > span:nth-of-type(3) {
    animation: rolingEmotion 4.6s ease-out 3.06s infinite;
  }
  @keyframes rolingEmotion {
    0% {
      bottom: -100px;
    }
    5%,
    30% {
      bottom: 0;
    }
    35%,
    100% {
      bottom: -100px;
    }
  }
`;

import * as React from "react";
import styled from "@emotion/styled";
import { NOTE_HOME_LIST } from "../../type/noteType";

export function Home() {
  const [testText, setTestText] = React.useState("");
  const placeHolder = [
    "봄처럼 \n마음은 따뜻하게",
    "여름처럼 \n사랑은 뜨겁게",
    "가을처럼 \n베풂은 풍성하게",
    "겨울처럼 \n미움은 얼어붙게",
  ];

  const onChangeTest = (value) => setTestText(value);

  const createHomeNoteList = NOTE_HOME_LIST.map((data, index) => {
    return (
      <HomeNoteItem key={index} id={data.id} bg={data.img}>
        <HomeNoteItemTextarea
          name="message"
          value={testText ? testText : placeHolder[index]}
          onChange={(event) => onChangeTest(event.target.value)}
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
  height: 100%;
  padding: 30px;
  text-align: center;
  border: none;
  font-size: 18px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0);
  z-index: 1;
  color: #fff;
  ${(props) => props.font};
  align-items: center;
  resize: none;
  &::placeholder {
    color: #fff;
    height: 100%;
  }
  &::-webkit-scrollbar {
    display: none;
  }
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

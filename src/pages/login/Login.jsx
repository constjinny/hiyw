import * as React from "react";
import styled from "@emotion/styled";
import { Input, Button } from "../../components";
// import USER_API from '../../api/user.api'

export function Login() {
  const [userId, setUserId] = React.useState("");
  const [userPW, setUserPW] = React.useState("");

  const changeUserId = (value) => setUserId(value);
  const changeUserPw = (value) => setUserPW(value);

  const onClickLogin = () => {};

  return (
    <LoginWrapper>
      <h2>
        <span>H</span>ow <span>i</span>s <span>Y</span>our <span>W</span>eather?
      </h2>
      <LoginInnerWrapper>
        <Input
          type="id"
          id="inputId"
          title="ID"
          placeholder="ID를 입력해주세요."
          getValue={changeUserId}
        />
        <Input
          type="password"
          id="inputPw"
          title="PASSWORD"
          placeholder="비빌번호를 입력해주세요."
          getValue={changeUserPw}
        />
        <Button text="LOGIN" onClick={onClickLogin} />
      </LoginInnerWrapper>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 50px 50px;
  text-align: center;
  box-sizing: border-box;
  > h2 {
    font-size: 24px;
    > span {
      color: skyblue;
    }
  }
`;

const LoginInnerWrapper = styled.div`
  margin-top: 50px;
  > button {
    margin-top: 30px;
  }
`;

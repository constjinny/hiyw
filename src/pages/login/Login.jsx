import * as React from "react";
import styled from "@emotion/styled";

import { Input, Button } from "../../components";
import { BUTTON_SIZE, BUTTON_COLOR } from "../../type/themeType";
import { postLoginApi } from "../../api/user.api";

export function Login() {
  const [userId, setUserId] = React.useState("");
  const [userPW, setUserPW] = React.useState("");

  const changeUserId = (value) => setUserId(value);
  const changeUserPw = (value) => setUserPW(value);

  const onClickLogin = async () => {
    const loginApi = await postLoginApi(userId, userPW);
    console.log("loginApi", loginApi);
  };

  return (
    <LoginWrapper>
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
      </LoginInnerWrapper>
      <Button
        text="LOGIN"
        size={BUTTON_SIZE.f}
        color={BUTTON_COLOR.white}
        onClick={onClickLogin}
      />
      <Button
        text="JOIN"
        size={BUTTON_SIZE.f}
        color={BUTTON_COLOR.gray}
        onClick={onClickLogin}
      />
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  text-align: center;
  box-sizing: border-box;
  > button {
    margin-top: 30px;
  }
`;

const LoginInnerWrapper = styled.div`
  margin-bottom: 20px;
`;

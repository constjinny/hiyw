import axios from "axios";
const API_URL = "http://localhost:3001/users/";

/**
 * 로그인 : 유저체크
 */
const postLoginApi = (id, pw) => {
  const userData = {
    id,
    pw,
  };
  axios
    .get(`${API_URL}`, userData)
    .then(function (response) {
      console.log("response : ", response);
    })
    .catch(function (error) {
      console.log("error : ", error);
    });
};

export default { postLoginApi };

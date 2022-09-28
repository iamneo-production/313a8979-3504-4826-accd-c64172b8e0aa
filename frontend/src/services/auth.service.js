import axios from "axios";


const register = (userName, email, password,mobileNumber,active,role) => {
  return axios.post("https://8080-aacdfdcbdbfbcffabfbadbfceaedbfcbceaface.examlyiopb.examly.io/signup", {
    userName,
    email,
    password,
    mobileNumber,
    active,
    role
  });
};

const login = (email, password) => {
  return axios
    .post("https://8080-aacdfdcbdbfbcffabfbadbfceaedbfcbceaface.examlyiopb.examly.io/login", {
      email,
      password,
    })
    .then((response) => {
      console.log(response)
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
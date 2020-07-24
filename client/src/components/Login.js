import React, { useState } from "react";

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

handleChanges = (e) => {
  setUsername({
    ...username,
    [e.target.name]: e.target.value
  })
  setPassword({
    ...password,
    [e.target.name]: e.target.value
  })
}

const Login = (e) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  e.preventDefault();
  axios.post("http://localhost:5000/api/login", username, password)
  .then((res) => {
    localStorage.setItem("token", res.data.payload);
    this.PaymentResponse.history.push("/colors")
  })
  .catch((err) => console.log(err));

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;

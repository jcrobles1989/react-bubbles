import React from "react";
import axios from "axios";

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChanges = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/bubbles");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <h1>Welcome to the Bubble App!</h1>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
            placeholder="Password"
          />
          <button>Log In</button>
        </form>
      </>
    );
  }
}

export default Login;

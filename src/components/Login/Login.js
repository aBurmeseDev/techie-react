import React, { Component } from "react";
import { Button } from "semantic-ui-react";
class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username);
  };
  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  render() {
    return (
      <div class="App-header">
        <Button type="submit" onClick={this.handleSubmit}>
          Enter Site
        </Button>
      </div>
    );
  }
}
export default Login;

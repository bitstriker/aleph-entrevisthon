import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      pass: "",
      wronguser: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let id = event.target.id;
    let value = event.target.value;
    this.setState({ [id]: value });
    console.log(id, value);
    if (id == "user") {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      console.log();
      if (!re.test(String(value).toLowerCase())) {
        this.setState({ wronguser: true });
      } else {
        this.setState({ wronguser: false });
      }
    }
  }
  render() {
    const { user, pass } = this.state;
    const errorStyle = { color: 'red', fontSize: 'small' };
    return (
      <form id="article-form">
        <Input
          text="Username"
          label="username"
          type="text"
          id="user"
          value={user}
          handleChange={this.handleChange}
        />
        {this.state.wronguser && <p style={errorStyle}>El formato de correo no es válido</p>}
        <Input
          text="Password"
          label="seo_title"
          type="text"
          id="pass"
          value={pass}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
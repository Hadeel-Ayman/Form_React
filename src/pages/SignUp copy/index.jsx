import React, { Component } from "react";
import "./style.css";
import { Dots,GoogleIcon } from "../../images";
import {Container,Button,MainText,Logo,FormText,Input} from "../../Components";
const initialData = {
  email: "example@gmai.com",
  password: "example123",
  Repeatpassword: "example123",
};

const defaults = {
  email: "",
  password: "",
  Repeatpassword: "",
};
export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    Repeatpassword: "",
    myData: initialData,
  };

  byGmail = () => {
    console.log("from byGmail");
    this.setState((prevState) => ({
      Repeatpassword: prevState.myData.Repeatpassword,
      email: prevState.myData.email,
      password: prevState.myData.password,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit", this.state);
    this.setState((prevState) => ({
      myData: {
        Repeatpassword: prevState.Repeatpassword,
        email: prevState.email,
        password: prevState.password,
      },
      ...defaults,
    }));
  };
  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({ [id]: value });
  };
  render() {
    return (
      <Container>
        <div className="mainbox">
          <div className={`imgBox ${this.props.class || ""}`}>
            <Logo />
            <img src={Dots} alt="" className="dots" />
            <MainText color="#fff" />
          </div>
          <div className="form">
            <span className="back">
              <svg
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.86245 2.225L8.37912 0.75L0.137451 9L8.38745 17.25L9.86245 15.775L3.08745 9L9.86245 2.225Z"
                  fill="#8692A6"
                />
              </svg>
              <span>Back</span>
            </span>
            <div className="content">
              <FormText />
              <form onSubmit={this.handleSubmit}>
                <Input
                  onChange={this.handleChangeInput}
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  label="Email address*"
                  value={this.state.email}
                />
                <Input
                  onChange={this.handleChangeInput}
                  id="password"
                  type="password"
                  placeholder="Password"
                  label="Create password*"
                  value={this.state.password}
                />
                <Input
                  onChange={this.handleChangeInput}
                  id="Repeatpassword"
                  type="password"
                  placeholder="Repeat password"
                  label="Repeat password*"
                  value={this.state.Repeatpassword}
                />
                <div className="checkbox">
                  <input type="checkbox" id="agree" required />
                  <label htmlFor="agree">I agree to terms & conditions</label>
                </div>
                <Button type="submit" bgColor="#1565D8" color="#fff">
                  Register Account
                </Button>
                <div className="or">or</div>
                <div className="LogInBtn">
                  <img src={GoogleIcon} alt="" className="icon" />
                  <Button
                    type="button"
                    bgColor="#fff"
                    onclick={this.byGmail}
                    color="#000"
                  >
                    login
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

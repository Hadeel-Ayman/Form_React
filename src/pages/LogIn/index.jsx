import React, { Component } from "react";
import "./style.css";
import {
  GoogleIcon,
  Github,
  Ln,
  Twitter,
  LogInImg,
  logInPassword,
} from "../../images";

import {
  Button,
  MainText,
  Logo,
  Container,
  FormText,
  Input,
  Or,
  LogInIcons,
} from "../../Components";
import { Link } from "react-router-dom";
const initialData = {
  gmail: {
    liEmail: "Gmail@gmai.com",
    liPassword: "123",
  },
  github: {
    liEmail: "Github@gmai.com",
    liPassword: "123",
  },
  linkedIn: {
    liEmail: "LinkedIn@gmai.com",
    liPassword: "123",
  },
  twitter: {
    liEmail: "Twitter@gmai.com",
    liPassword: "123",
  },
};

const defaults = {
  liEmail: "",
  liPassword: "",
};
export default class LogIn extends Component {
  state = {
    liEmail: this.props.initialGmail ? initialData.gmail.liEmail : "",
    liPassword: this.props.initialGmail ? initialData.gmail.liPassword : "",
    myData: initialData,
    passwordType: "password",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit", this.state);
    this.setState((prevState) => ({
      myData: {
        liEmail: prevState.liEmail,
        liPassword: prevState.liPassword,
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
        <div className="mainbox LogIn">
          <div className={`imgBox ${this.props.class || ""}`}>
            <Logo className="logIn" />
            <MainText className="logIn" />
            <img src={LogInImg} alt="" className="LogInImg" />
          </div>

          <div className="form">
            <div className="content">
              <FormText
                className="login"
                title="Join the game!"
                para="Go inside the best gamers social network!"
              />
              <div className="icons5">
                <LogInIcons
                  img={GoogleIcon}
                  onclick={() => this.handleLogIn("gmail")}
                />
                <LogInIcons
                  img={Github}
                  onclick={() => this.handleLogIn("github")}
                />
                <LogInIcons
                  img={Ln}
                  onclick={() => this.handleLogIn("linkedIn")}
                />
                <LogInIcons
                  img={Twitter}
                  onclick={() => this.handleLogIn("twitter")}
                />
              </div>

              <form onSubmit={this.handleSubmit}>
                <Or />
                <Input
                  onChange={this.handleChangeInput}
                  id="liEmail"
                  type="email"
                  placeholder="Write your email"
                  label="Your email"
                  value={this.state.liEmail}
                />
                <div className={`logInPassword ${this.state.passwordType}`}>
                  <span>
                    <img
                      src={logInPassword}
                      alt=""
                      onClick={() => {
                        this.setState({
                          passwordType:
                            this.state.passwordType === "password"
                              ? "text"
                              : "password",
                        });
                      }}
                    />
                  </span>
                  <Input
                    onChange={this.handleChangeInput}
                    id="liPassword"
                    type={this.state.passwordType}
                    placeholder="Password"
                    label="Enter your password"
                    value={this.state.liPassword}
                  />
                </div>
                <Link to="/GamePage">
                  <Button
                    className="Login"
                    type="submit"
                    bgColor="#1565D8"
                    color="#fff"
                  >
                    Login
                  </Button>
                </Link>
                <p className="Register">
                  Don’t have an account?{" "}
                  <Link to="/SignUp">
                    <span className="register">Register</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

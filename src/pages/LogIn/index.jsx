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
const initialData = {
  gmail: {
    liEmail: "exampleGmail@gmai.com",
    liPassword: "example123",
  },
  github: {
    liEmail: "exampleGithub@gmai.com",
    liPassword: "example123",
  },
  linkedIn: {
    liEmail: "exampleLinkedIn@gmai.com",
    liPassword: "example123",
  },
  twitter: {
    liEmail: "exampleTwitter@gmai.com",
    liPassword: "example123",
  },
};

const defaults = {
  liEmail: "",
  liPassword: "",
  passwordType: "password",
};
export default class LogIn extends Component {
  state = {
    liEmail: this.props.initialGmail ? initialData.gmail.liEmail : "",
    liPassword: this.props.initialGmail ? initialData.gmail.liPassword : "",
    myData: defaults,
    passwordType: "password",
  };

  handleLogIn = (by) => {
    this.setState({
      liEmail: initialData[by].liEmail,
      liPassword: initialData[by].liPassword,
    });
  };

  goToSignUp = () => {
    this.props.app.setState({ datashow: "SginUp" });
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
              <div className="icons">
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

                <Button
                  className="Login"
                  type="submit"
                  bgColor="#1565D8"
                  color="#fff"
                >
                  Login
                </Button>
                <p className="Register">
                  Don’t have an account?{" "}
                  <span onClick={() => this.goToSignUp()} className='register'>Register</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

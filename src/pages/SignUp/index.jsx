import React, { Component } from "react";
import { GoogleIcon, Dots } from "../../images";
import "./style.css";
import * as yup from "yup";

import {
  Container,
  Button,
  MainText,
  Logo,
  FormText,
  Input,
  Or,
  PasswordStrong,
  Back,
  Checkbox,
} from "../../Components";

import { Link } from "react-router-dom";
const defaults = {
  email: "",
  password: "",
  Repeatpassword: "",
  checked: false,
};

const Reg = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})";

export default class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    Repeatpassword: "",
    myData: defaults,
    passwordStrong: "",
    checked: false,
  };

  validate2 = (value) => {
    const strongRegex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      ),
      mediumRegex = new RegExp(
        "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
      );
    if (strongRegex.test(value) && value.length >= 6) {
      this.setState({ passwordStrong: "strong" });
    } else if (mediumRegex.test(value) && value.length >= 6) {
      this.setState({ passwordStrong: "medium" });
    } else if (value.length >= 1) {
      this.setState({ passwordStrong: "weak" });
    } else this.setState({ passwordStrong: "" });
  };

  // goToLogIn = (gmail) => {
  //   this.props.app.setState({
  //     initialGmail: gmail ? true : false,
  //     datashow: "LogIn",
  //   });
  // };
  schema = yup.object().shape({
    name: yup.string().min(6, "Name Should be more than 8").max(16).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).matches(Reg).required(),
    confirmpass: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
    checked: yup.boolean().oneOf([true]).required(),
  });

  handleSubmit = (e) => {
    e.preventDefault();

    this.schema
      .validate(
        {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          confirmpass: this.state.confirmpass,
          checked: this.state.checked,
        },
        { abortEarly: false }
      )
      .then(() => {
        console.log("valid");
        this.setState((prevState) => ({
          myData: {
            name: prevState.name,
            email: prevState.email,
            password: prevState.password,
            confirmpass: prevState.confirmpass,
          },
          ...defaults,
        }));
      })
      .catch((e) =>
        this.setState({
          error: "Something error,Please check your input fields!",
        })
      );
  };

  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({ [id]: value });
    if (id === "password") {
      this.validate(value);
    }
  };
  render() {
    return (
      <Container>
        <div className="mainbox signUp">
          <div className={`imgBox ${this.props.class || ""}`}>
            <Logo />
            <img src={Dots} alt="" className="dots" />
            <MainText color="#fff" />
          </div>
          <div className="form">
            <Back onclick={() => this.goToLogIn()} />
            <div className="content">
              <FormText
                title="Register Individual Account!"
                para="For the purpose of gamers regulation, your details are required."
              />
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
                <PasswordStrong passwordStrong={this.state.passwordStrong} />
                <Input
                  onChange={this.handleChangeInput}
                  id="Repeatpassword"
                  type="password"
                  placeholder="Repeat password"
                  label="Repeat password*"
                  value={this.state.Repeatpassword}
                />
                <Checkbox id="agree" label="I agree to terms & conditions" />
                <Button type="submit" className="btn">
                  Register Account
                </Button>
                <Or />
                <div className="LogInBtn">
                  <img src={GoogleIcon} alt="" className="icon" />
                  <Link to="/login" className="LinkLogin">
                    <Button
                      type="button"
                      bgColor="#fff"
                      // onclick={() => this.goToLogIn(true)}
                      color="#000"
                    >
                      login
                    </Button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

import React, { Component } from "react";
import "./style.css";
import { Card, Player } from "../../Components";

import {
  FRIENDS,
  winframe,
  win,
  trophy,
  play4,
  play3,
  play2,
  img1,
  img2,
  img3,
  plus,
  like,
  puzzle,
  Setting,
  light,
  Rectangle,
} from "../../images";

export default class GamePage extends Component {
  state = {
    theme: "default",
  };

  changeTheme = (newTheme) => {
    this.setState({ theme: newTheme });
  };

  render() {
    return (
      <div className={`GamePage theme-${this.state.theme}`}>
        <div className="side_bar">
          <a href="/#">
            <img src={plus} className="new_game" alt="new_game" />
          </a>

          <div className="icons">
            <a href="/#">
              <img src={like} className="like" alt="like" />
            </a>
            <a href="/#">
              <img src={Setting} className="setting" alt="setting" />
            </a>
            <a href="/#">
              <img src={puzzle} className="puzzle" alt="puzzle" />
            </a>
          </div>
          <button
            className={`btn_theme ${
              this.state.theme === "default"
                ? "btn_theme-default"
                : "btn_theme-dark"
            }`}
            onClick={() =>
              this.changeTheme(
                this.state.theme === "default" ? "dark" : "default"
              )
            }
          >
            <img src={light} className="theme" alt="theme" />
          </button>


        </div>
        <div className="bar"></div>
        <main className="content">
          <div className="user">Welcome back, Jenny!</div>
          <img src={Rectangle} alt="user_img" className="user_img" />

          <div className="game">
            <h1 className="game_title">NEW GAMES </h1>
            <div className="games">
              <Card
                backgroundImg={img2}
                description={
                  "Join in the new DLC with Kratos to learn more about him and his future."
                }
              />
              <Card
                backgroundImg={img3}
                description={
                  "Be part of the Suicide Squad and kill the Justice League!-Amanda Waller"
                }
              />
              <Card
                backgroundImg={img1}
                description={
                  "Miles Morales discovers powers from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks."
                }
                direction={"direction"}
              />
            </div>
          </div>

          <div className="last_games">
            <div className="played_list">
              <h3 className="last_played">last played</h3>

              <div className="list_played">
                <Player
                  Img={play3}
                  desc={"Hogwarts Legacy 50%"}
                  className="circle"
                />
                <Player
                  Img={play2}
                  desc={"God Of War: Ragnarök 72.5%"}
                  className="circle"
                />
                <Player
                  Img={play3}
                  desc={"Crash Bandicoot N. Sane Trilogy 34%"}
                  className="circle"
                />
                <Player
                  Img={play4}
                  desc={"Dying Light 2 Stay Human 100%"}
                  className="circle"
                />
              </div>
            </div>
            <div className="main_trophy">
              <h3 className="tropyh_title">most recent trophy </h3>
              <div className="trophy">
                <img src={trophy} alt="trophy" className="trophy_img" />
                <img src={win} alt="win" className="win" />
                <img src={winframe} alt="winframe" className="win_shadow" />
                <p className="trophy_desc">
                  perfect KILL streak
                  <span className="trophy_desc_2">You are in the 0.5%</span>
                </p>
                <p className="last_time">
                  assassin's creed odyssey
                  <span className="last_time_2">last played: 34 hours ago</span>
                </p>
              </div>
            </div>
            <div className="friends">
              <p>friends</p>
              <img src={FRIENDS} alt="friends" className="friends_img" />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

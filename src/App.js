import { SignUp, LogIn, GamePage } from "./pages";
import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/GamePage" element={<GamePage />} />
          <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
      </>
    );
  }
}

export default App;

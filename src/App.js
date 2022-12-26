import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import React from 'react';
class App extends React.Component {
  state = {
    datashow: "LogIn",
    Gmail: false
  }
  render() {
    return (
      <>
        {this.state.datashow === "LogIn" ? <LogIn app={this} Gmail={this.state.Gmail} /> : <SignUp app={this} />}
      </>
    );
  }
}

export default App;

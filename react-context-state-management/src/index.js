import React from 'react';
import ReactDOM from 'react-dom';

import LoginPage from './LoginPage';
import MainPage from './MainPage';
import UserContext from './UserContext';
import './index.css';

class Root extends React.Component {
  state = {
    currentUser: null,
  };

  handleLogin = user => {
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
  };

  render() {
    const { currentUser } = this.state;
    return (
      <UserContext.Provider
        value={{
          user: currentUser,
          onLogin: this.handleLogin,
          onLogout: this.handleLogout,
        }}
      >
        {currentUser ? <MainPage /> : <LoginPage onLogin={this.handleLogin} />}
      </UserContext.Provider>
    );
  }
}

ReactDOM.render(<Root />, document.querySelector('#root'));

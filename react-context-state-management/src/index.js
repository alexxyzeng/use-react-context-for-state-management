import React from 'react';
import ReactDOM from 'react-dom';

import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { UserProvider, UserConsumer } from './UserContext';
import { EmailProvider, EmailConsumer } from './EmailContext';
import './index.css';

// class Root extends React.Component {
//   state = {
//     currentUser: null,
//   };

//   handleLogin = user => {
//     this.setState({ currentUser: user });
//   };

//   handleLogout = () => {
//     this.setState({ currentUser: null });
//   };

//   render() {
//     const { currentUser } = this.state;
//     return (
//       <UserContext.Provider
//         value={{
//           user: currentUser,
//           onLogin: this.handleLogin,
//           onLogout: this.handleLogout,
//         }}
//       >
//         {currentUser ? <MainPage /> : <LoginPage />}
//       </UserContext.Provider>
//     );
//   }
// }

function Root() {
  return (
    <UserConsumer>
      {({ user }) => (user ? <MainPage /> : <LoginPage />)}
    </UserConsumer>
  );
}

ReactDOM.render(
  <UserProvider>
    <EmailProvider>
      <Root />
    </EmailProvider>
  </UserProvider>,
  document.querySelector('#root')
);

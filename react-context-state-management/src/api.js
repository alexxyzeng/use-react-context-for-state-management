export const FAKE_USER = {
  firstName: 'Alex',
  lastName: 'Zeng',
  username: 'alex',
  avatar: 'https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b?s=32',
};

export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'alex' && password === 'secret') {
        resolve(FAKE_USER);
      } else {
        reject({ message: 'Invalid username or password' });
      }
    }, 300);
  });
}

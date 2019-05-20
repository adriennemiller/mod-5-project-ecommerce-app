export const getProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch('http://localhost:4000/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'applicaiton/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.message) {
            localStorage.removeItem('token');
          } else {
            dispatch(loginUser(data.User));
          }
        });
    }
  };
};

export const userPostFetch = user => {
  return dispatch => {
    return fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ user })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          alert('error creating account');
          // Here you should have logic to handle invalid creation of a user.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error with creating the user, i.e. invalid username
        } else {
          localStorage.setItem('token', data.jwt);
          dispatch(loginUser(data.user));
        }
      });
  };
};

const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
});

export const userLoginFetch = user => {
  return dispatch => {
    return fetch('http://localhost:4000/users', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ user })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          alert('invalid login!');
        } else {
          localStorage.setItem('token', data.jwt);
          dispatch(loginUser(data.user));
        }
      });
  };
};

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
});

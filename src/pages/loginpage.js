import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLoginFetch } from '../config/actions';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    let a = this.props.userLoginFetch(this.state);
    console.log(this.props.history);
    let b = this.props.history.push('/');
    return a && b;
  };

  render() {
    return (
      <div>
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Login</h1>

          <label className="sr-only">Username</label>
          <input
            className="form-control"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br />

          <label className="sr-only">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Log In
          </button>
        </form>
        <br />
        Or <Link to="/signup">Create Account</Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);

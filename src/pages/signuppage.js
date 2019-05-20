import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userPostFetch } from '../config/actions';

class Signup extends Component {
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
    let a = this.props.userPostFetch(this.state);
    let b = this.props.history.push('/');
    return a && b;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>

        <label>Username</label>
        <input
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <input type="submit" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userPostFetch: userInfo => {
      dispatch(userPostFetch(userInfo));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Signup);

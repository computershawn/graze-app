import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import './LoginPage.css';
import Nav from '../Nav/Nav'


export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitBasicAuth = this.handleSubmitBasicAuth.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value });
  }

  handleInputChange(e) {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    });
  }

  handleSubmitBasicAuth(e) {
    // To save time, this handleSubmitBasicAuth stuff was not
    // written correctly. To do it the right way, see the
    // Protected Endpoints chapter here:
    // https://courses.thinkful.com/auth-jwt-v1/checkpoint/3
    e.preventDefault()
    const { user_name, password } = e.target

    // TokenService.saveAuthToken(
    //   TokenService.makeBasicAuthToken(user_name.value, password.value)
    // )
    let loginOK = TokenService.checkCreds(TokenService.makeBasicAuthToken(user_name.value, password.value))
    if(loginOK) {
      TokenService.saveAuthToken(
        TokenService.makeBasicAuthToken(user_name.value, password.value)
      )
      this.props.onLoginSuccess()
    }
    user_name.value = ''
    password.value = ''
  }

  render() {
    return (
      <>
        <Nav />
        <main>
          <header>
            <h1>Sign In</h1>
          </header>
          <section>
            <form onSubmit={this.handleSubmitBasicAuth}>
              <div className="form-section">
                <label htmlFor="login_username">User Name</label>
                <input id="login_username" type="text" name="user_name" placeholder='username' onChange={this.handleChange} required />
              </div>
              <div className="form-section">
                <label htmlFor="login_password">Password</label>
                <input id="login_password" type="password" name="password" placeholder='password' onChange={this.handleChange} required />
              </div>
              <hr />
              <button type="submit">Submit</button>
            </form>
          </section>
        </main>
      </>

    )
  }
}
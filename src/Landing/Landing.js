import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <>
        <Nav />
        <main>
          <header className="landing-hero" role="banner">
            <h1 className="app-title">graze</h1>
            <p className="app-subtitle"><em>Eat Like a Local</em></p>
          </header>
          <section>
            <header>
              <h4>Looking for some chard?</h4>
            </header>
            <p>Graze locates the freshest fruits, vegetables and meats at more than 400 farmer's markets in and around Los Angeles.</p>
            {/* <button type='submit'>Start Browsing Now</button> */}
            <div className="landing-links">
              <div className="browse-option">
                <Link to="/search">Search</Link>
              </div>
              <div className="browse-option">
                <Link to="/markets">Browse Markets</Link>
              </div>
            </div>
            {/* <br /><br />
            <p><a href="http://nothing.com">Login</a> | <a href="http://nothing.com">Register</a></p> */}
          </section>
        </main>
      </>
    );
  }
}


export default Landing;
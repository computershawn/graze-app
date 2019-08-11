import React, { Component } from 'react';
import './Landing.css';


class Landing extends Component {
  render() {
    return (
      <main>
        <header role="banner">
          <h1 className="app-title">graze</h1>
          <p className="app-subtitle"><em>Eat Like a Local</em></p>
        </header>
        <section>
          <header>
            <h4>Looking for some chard?</h4>
          </header>
          <p>[<em>placeholder for image of a farmer's market</em>]</p>
          <p>Graze helps you find the freshest fruits, vegetables and meats at more than 400 farmer's markets in and around Los Angeles.</p>
          <button type='submit'>Start Browsing Now</button>
          <br /><br />
          <p><a href="http://nothing.com">Login</a> | <a href="http://nothing.com">Register</a></p>
        </section>
      </main>
    );
  }
}


export default Landing;
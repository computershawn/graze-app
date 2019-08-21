import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import './AdminPage.css';


class AdminPage extends Component {
  render() {
    return (
      <>
        <Nav />
        <main>
          <header>
            <h1>Manage Products</h1>
          </header>
          <section>
            <h4>
              <Link to='/new-product'>New Product</Link>
            </h4>
            <h4>
              <Link to='/all-products'>All Products</Link>
            </h4>
          </section>
        </main>
      </>
    );
  }
}

export default AdminPage;
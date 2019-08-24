import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import './ProductList.css'
import ProductListItem from '../ProductListItem/ProductListItem'
import MarketDataContext from '../../MarketDataContext'


class ProductList extends Component {
  static contextType = MarketDataContext;
  render() {
    const { products = [] } = this.context;
    const orderedList = products.sort((a, b) => {
      return b.id - a.id
    })
    const productsListHTML = orderedList.map(p =>
      <ProductListItem key={p.id}
        id={p.id}
        name={p.product_name}
        desc={p.product_description}
        kind={p.product_category}
      />
    );

    return (
      <>
        <Nav />
        <main role="main">
          <header role="banner">
            <h1>Products</h1>
          </header>
          <div className="all-products-list">
            {productsListHTML}
          </div>
        </main>
      </>
    );
  }
}

export default ProductList
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import MarketDataContext from '../../MarketDataContext'
import config from '../../config'
import './ProductListItem.css'

function deleteProductRequest(productId, productDeleteCallbackFunc) {
  fetch(`${config.API_ENDPOINT}/products/${productId}`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${config.API_KEY}`
    },
    body: JSON.stringify({
      id: productId
    })
  })
    .then(res => {
      if (!res.ok) {
        // get the error message from the response,
        return res.json().then(error => {
          // then throw it
          throw error
        })
      }
      return res
    })
    .then(data => {
      // call the callback when the request is successful. this
      // is where the App component can remove it from state
      productDeleteCallbackFunc(productId);
      // * In our case productDeleteCallbackFunc is context.deleteProduct; We
      //   specified this below, on line 56. Function context.deleteProduct
      //   is defined in App.js. It removes the product from App's state.
    })
    .catch(error => {
      console.error(error)
    })
}

export default class ProductListItem extends Component {
  static defaultProps = {
    onDeleteProduct: () => { },
  }
  render() {
    return (
      <MarketDataContext.Consumer>
        {(context) => (
          <div className="product-list-item">
            <h2>
              {this.props.name}
            </h2>
            <p><strong>Category:</strong> {this.props.kind}</p>
            <p><strong>Description:</strong> {this.props.desc}</p>
            <p>
            <Link to={`/update/${this.props.id}`}>
              Update
            </Link>
            &nbsp;&nbsp;
            <button type='button'
              onClick={() => {
                this.props.onDeleteProduct();
                deleteProductRequest(
                  this.props.id,
                  context.deleteProduct,
                )
              }}>
              Delete
            </button>
            </p>
          </div>
        )}
      </MarketDataContext.Consumer>
    )
  }
}

ProductListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  onDeleteProduct: PropTypes.func
};
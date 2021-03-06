import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import './UpdateProduct.css'
import MarketDataContext from '../../MarketDataContext'

class UpdateProducts extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      desc: null,
      cat: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static contextType = MarketDataContext;

  handleSubmit(e, id) {
    e.preventDefault()
    const productToUpdate = {
      id: id,
      product_name: e.target['productName'].value,
      product_description: e.target['productDesc'].value
    }
    this.context.updateProduct(productToUpdate)
    this.props.history.push('/all-products')
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value });
  }

  render() {
    const { products = [] } = this.context
    const product_id = this.props.match.params.productId
    let productItem = products.find(product => (product.id.toString() === product_id.toString()))
    let content = (
      <>
        <Nav />
        <main>
          <section>
            <header></header>
            <div>No product with id {product_id}</div>
          </section>
        </main>
      </>
    )
    if (productItem) {
      const { product_name, product_description } = productItem
      content = (
        <>
          <Nav />
          <main>
            <section className="product-updated hidden">
              <p><small>Product has been updated.</small></p>
            </section>
            <section>
              <header>
                <h3>Update Product</h3>
              </header>
              <form onSubmit={(e) => this.handleSubmit(e, product_id)}>
                <div className="form-section">
                  <label htmlFor="prod-name">Name</label>
                  <input id="prod-name" type="text" name="productName" defaultValue={product_name} onChange={this.handleChange} required />
                </div>
                <div className="form-section">
                  <label htmlFor="prod-desc">Description</label>
                  <textarea id="prod-desc" defaultValue={product_description} name="productDesc" rows="10" onChange={this.handleChange} required />
                </div>
                <hr />
                <button type="submit">Submit</button>
                <Link className="cancel-action" to='/all-products'>Cancel</Link>              
              </form>
            </section>
          </main>
        </>
      )
    }

    return content
  }
}


export default UpdateProducts;
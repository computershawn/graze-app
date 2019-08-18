import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import './UpdateProduct.css'
import MarketDataContext from '../MarketDataContext'

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
    console.log(productToUpdate)
    this.context.updateProduct(productToUpdate)
    this.props.history.push(`/all-products`);    
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value });
  }

  render() {
    const { products = [] } = this.context;
    let urlProductId = this.props.match.params.productId
    let productItem = products.find(product => (product.id.toString() === urlProductId.toString()))
    let content = (
      <>
        <Nav />
        <main>
          <section>
            <header></header>
            <div>No product with id {urlProductId}</div>
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
            <section>
              <header>
                <h3>Update Product</h3>
              </header>
              <form onSubmit={(e) => this.handleSubmit(e, urlProductId)}>
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
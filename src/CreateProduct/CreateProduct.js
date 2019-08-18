import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import MarketDataContext from '../MarketDataContext';
import './CreateProduct.css';
// In production, categories and market name
// info will be retrieved from database 
//import dummyStore from '../dummy-store'

const productCats = ['fruit',
  'vegetable',
  'nuts and grains',
  'poultry',
  'meat',
  'seafood',
  'other']
// Here is the psql command that would be used to get eh productCats array
// select t.typname, e.enumlabel from pg_type t, pg_enum e where t.oid = e.enumtypid;
// Ref: http://postgresguide.com/sexy/enums.html

class CreateProduct extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      name: `example: persimmon`,
      desc: `Information about this product...`,
      cat: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static contextType = MarketDataContext

  handleSubmit(e) {
    e.preventDefault()
    const newProduct = {
      product_name: e.target['productName'].value,
      product_description: e.target['productDesc'].value,
      kind: e.target['productCat'].value,
    }
    this.context.addProduct(newProduct)
    this.props.history.push(`/all-products`);    
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

  render() {
    const { name, desc } = this.state
    return (
      <>
        <Nav />
        <main>
          <header>
            <h1>Create New Product</h1>
          </header>
          <section>
            <form onSubmit={this.handleSubmit}>
              <div className="form-section">
                <label htmlFor="prod-name">Name</label>
                <input id="prod-name" type="text" name="productName" placeholder={name} onChange={this.handleChange} required />
              </div>

              <div className="form-section">
                <label htmlFor="prod-desc">Description</label>
                <textarea id="prod-desc" placeholder={desc} name="productDesc" rows="10" onChange={this.handleChange} required />
              </div>

              <div className="form-section">
                <label htmlFor="prod-cat">Category</label>
                <select id="prod-cat" name="productCat" onChange={this.handleChange} required>
                  {productCats.map(cat => {
                    let val = cat === '-' ? '' : cat
                    return <option key={cat} value={val}>{cat}</option>
                  })}
                </select>
              </div>

              <hr />

              <button type="submit">Submit</button>
            </form>
          </section>
        </main>
      </>
    );
  }
}

export default CreateProduct;
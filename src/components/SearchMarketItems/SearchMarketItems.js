import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import './SearchMarketItems.css'
import MarketDataContext from '../../MarketDataContext'




class SearchMarketItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      prevSearchTerm: '',
      haveResults: false,
      searchResults: [],
      itemNotFound: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static contextType = MarketDataContext;

  handleSubmit(e) {
    const { products=[], pricelist=[], vendors=[], markets=[] } = this.context;
    let prevSearchTerm = this.state.searchTerm
    let product = products.find(product => {
      return product.product_name === this.state.searchTerm.toLowerCase()
    })
    let index = product ? product.id : null
    let searchResults = []
    if(index) {
      let list = pricelist.filter(item => {
        return item.product_id.toString() === index.toString()
      })
      searchResults = list.map(item => {
        let p = item.price
        let u = item.units
        let v = vendors.find(vendor => {
          return vendor.id.toString() === item.vendor_id.toString()
        })
        let m = markets.find(market => {
          return market.id.toString() === v.market_id.toString()
        })
        return {
          price: `${p}/${u}`,
          marketId: m.id,
          market: m.market_name,
          vendor: v.vendor_name,
          stall: v.market_stall
        }
      })
    }

    this.setState({
      haveResults: true,
      prevSearchTerm: prevSearchTerm,
      searchResults: searchResults,
      itemNotFound: searchResults.length === 0
    })

    e.preventDefault()
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value });
  }

  formatSearchResults() {
    let resultsHTML = this.state.searchResults.map((result, i) => {
      const linkTo = `/markets/${result.marketId}`
      return (
        <article key={i}>
          <h4>{result.market} | <a href="http://nothing.com">Map</a></h4>
          <p><em>
            ${result.price} at {result.vendor} (Stall {result.stall})<br />
          </em></p>
          <p><Link to={linkTo}>View this Market</Link></p>
        </article>
      )
    })
    return resultsHTML
  }

  render() {
    const { prevSearchTerm, haveResults, itemNotFound } = this.state
    return (
      <>
        <Nav />
        <main>
          <header>
            <h1>Freshness Finder</h1>
          </header>

          <section>
            <form onSubmit={this.handleSubmit}>
              <div className="form-section">
                <label htmlFor="searchTerm">What are you shopping for today?</label>
                <input type="text" name="searchTerm" placeholder='Apples' onChange={this.handleChange} required />
              </div>
              <button type="submit">Find It!</button>
            </form>
          </section>

          {
            (haveResults && !itemNotFound) && (
              <section>
                <div className="results-title">
                  <p>Search results for <strong>{prevSearchTerm}</strong></p>
                </div>
                <div>
                  {this.formatSearchResults()}
                </div>
              </section>
            )}
          {
            itemNotFound && (
              <section>
                <div className="results-title">
                  <p>Sorry, no markets in this area have <strong>{prevSearchTerm}</strong></p>
                </div>
              </section>
            )}
        </main>
      </>
    );
  }
}

export default SearchMarketItems;
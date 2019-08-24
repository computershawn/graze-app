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
    e.preventDefault()
    const { products = [], pricelist = [], vendors = [], markets = [] } = this.context;
    let prevSearchTerm = this.state.searchTerm
    let product = products.find(product => {
      return product.product_name === this.state.searchTerm.toLowerCase()
    })
    let index = product ? product.id : null
    let searchResults = []
    let searchResultsOrganized = []
    if (index) {
      let list = pricelist.filter(item => {
        return item.product_id.toString() === index.toString()
      })
      searchResults = list.map(item => {
        let price = `${item.price}/${item.units}`
        let v = vendors.find(vendor => {
          return vendor.id.toString() === item.vendor_id.toString()
        })
        let m = markets.find(market => {
          return market.id.toString() === v.market_id.toString()
        })
        return {
          price: price,
          marketId: m.id,
          market_name: m.market_name,
          vendor: v.vendor_name,
          stall: v.market_stall
        }
      })

      let uniqueMarkets = []
      list.forEach(item => {
        let v = vendors.find(vendor => {
          return vendor.id.toString() === item.vendor_id.toString()
        })
        let m = markets.find(market => {
          return market.id.toString() === v.market_id.toString()
        })
        if (!uniqueMarkets.includes(m.market_name)) {
          uniqueMarkets.push(m.market_name)
        }
      })

      searchResultsOrganized = uniqueMarkets.map(market => {
        const thisMarketVendors = searchResults.filter(item => {
          return item.market_name === market
        })
        const id = thisMarketVendors[0].marketId;
        return {
          market_name: market,
          id: id,
          thisMarketVendors: thisMarketVendors
        }
      })
      // This way of sorting and filtering the list is hella convoluted but ok
    }

    this.setState({
      haveResults: true,
      prevSearchTerm: prevSearchTerm,
      searchResults: searchResultsOrganized,
      itemNotFound: searchResults.length === 0
    })
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value });
  }

  formatSearchResults() {
    let resultsHTML = this.state.searchResults.map((result, i) => {
      const marketLink = `/markets/${result.id}`
      return (
        <article key={i}>
          <h3><Link to={marketLink}>{result.market_name}</Link></h3>
          {result.thisMarketVendors.map(v => {
            return (<p key={v.vendor}><em>
              ${v.price} at {v.vendor} (Stall {v.stall})
            </em></p>)
          })}
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
            <h1>Search</h1>
          </header>

          <section className="search-container">
            <form onSubmit={this.handleSubmit}>
              <div className="form-section search-field">
                <label htmlFor="searchTerm">What are you shopping for today?</label>
                <input type="text" name="searchTerm" placeholder='apple' onChange={this.handleChange} required />
              </div>
              <button type="submit">Find It!</button>
            </form>
          </section>

          {
            (haveResults && !itemNotFound) && (
              <section className="results-container">
              <hr />
                <div className="results-title">
                  <p>Search results for <strong>{prevSearchTerm}</strong></p>
                </div>
                <div className="results-area">
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
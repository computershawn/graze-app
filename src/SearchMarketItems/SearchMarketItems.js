import React, { Component } from 'react';
import './SearchMarketItems.css';
// In production, itemsListing info will
// be retrieved from the database 
import dummyStore from '../dummy-store'




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

  handleSubmit(e) {
    let prevSearchTerm = this.state.searchTerm
    let searchResults = dummyStore.itemsListing.filter(item => {
      let foods = Object.keys(item.foods)
      return foods.includes(this.state.searchTerm.toLowerCase())
    })

    this.setState({
      haveResults: true,
      prevSearchTerm: prevSearchTerm,
      searchResults: searchResults,
      itemNotFound: searchResults.length === 0
    })

    e.preventDefault()
    // Insert code to find searchTerm in the database >>>
    // OR just retrieve all food items in database as JSON
    // and search for the search term in that data
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value });
  }

  formatSearchResults() {
    const { prevSearchTerm } = this.state
    let resultsHTML = this.state.searchResults.map(result => {
      return (
        <article key={result.vendorName}>
          <h4>{result.marketName} | <a href="http://nothing.com">Map</a></h4>
          <p><em>
          ${result.foods[prevSearchTerm]} at {result.vendorName} (Stall {result.vendorStall})<br />
          </em></p>
        </article>
      )
    })
    return resultsHTML
  }

  render() {
    const { prevSearchTerm, haveResults, itemNotFound } = this.state
    return (
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
                <p>Search results for <strong>{prevSearchTerm}</strong>:</p>
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
    );
  }
}

export default SearchMarketItems;
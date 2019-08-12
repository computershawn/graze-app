import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import './MarketDetail.css'
import dummyStore from '../dummy-store'

class MarketDetail extends Component {
  render() {
    let urlMarketId = this.props.match.params.marketId
    let marketItem = dummyStore.markets.find(market => (market.id.toString() === urlMarketId.toString()))
    let content = (
      <>
        <Nav />
        <main>
          <section>
            <header></header>
            <div>No market with id {urlMarketId}</div>
          </section>
        </main>
      </>
    )
    if (marketItem) {
      const { title, /*hero_image,*/ schedule, address, categories, vendor_list, description } = marketItem
      const paragraphs = description.split('****')
      const descriptionHTML = paragraphs.map((para, i) => <p key={i}>{para}</p>)
      const cats = categories.join(', ')
      const vendorList = vendor_list.map(vendor => {
        return <li key={vendor.id}>{vendor.title} (Stall {vendor.stall})</li>
      });

      content = (
        <>
          <Nav />
          <main>
            <header className="hero" role="banner"></header>
            <section>
              <header>
                <h2>{title}</h2>
              </header>
              <div className="description">
                <p><span className="detail-label">When:</span> {schedule}</p>
                <p><span className="detail-label">Where:</span> {address} | <a href="https://maps.google.com">Map</a></p>
                <p><span className="detail-label">Categories:</span> {cats}</p>
              </div>
            </section>
            <section>
              <header>
                <h3>Information</h3>
              </header>
              {descriptionHTML}
              <ul className="vendor-list">
                {vendorList}
              </ul>
            </section>
          </main>
        </>
      )
    }

    return content
  }
}


export default MarketDetail;
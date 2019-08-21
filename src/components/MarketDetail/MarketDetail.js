import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import './MarketDetail.css'
import MarketDataContext from '../../MarketDataContext'

class MarketDetail extends Component {
  static contextType = MarketDataContext;
  render() {
    const { markets=[], vendors=[] } = this.context;
    let urlMarketId = this.props.match.params.marketId
    let marketItem = markets.find(market => (market.id.toString() === urlMarketId.toString()))
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
      //const { market_name, hero_image, schedule, market_location, categories, market_description } = marketItem
      const { market_name, schedule, market_location, market_description } = marketItem
      const paragraphs = market_description.split('****')
      const descriptionHTML = paragraphs.map((para, i) => <p key={i}>{para}</p>)
      const marketVendors = vendors.filter(vendor => {
        return vendor.market_id.toString() === urlMarketId.toString()
      })
      const vendorListHTML = marketVendors.map(vendor => {
        return <li key={vendor.id}>{vendor.vendor_name} (Stall {vendor.market_stall})</li>
      });

      content = (
        <>
          <Nav />
          <main>
            <header className="hero" role="banner"></header>
            <section>
              <header>
                <h2>{market_name}</h2>
              </header>
              <div className="description">
                <p><span className="detail-label">When:</span> {schedule}</p>
                <p><span className="detail-label">Where:</span> {market_location} | <a href="https://maps.google.com">Map</a></p>
                {/* <p><span className="detail-label">Categories:</span> {cats}</p> */}
              </div>
            </section>
            <section>
              <header>
                <h3>About This Market</h3>
              </header>
              {descriptionHTML}
              <ul className="vendor-list">
                {vendorListHTML}
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
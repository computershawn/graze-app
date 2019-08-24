import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import './MarketDetail.css'
import MarketDataContext from '../../MarketDataContext'

class MarketDetail extends Component {
  static contextType = MarketDataContext;
  render() {
    const { markets = [], vendors = [] } = this.context;
    let urlMarketId = this.props.match.params.marketId
    let marketItem = markets.find(market => (market.id.toString() === urlMarketId.toString()))
    let content = (
      <>
        <Nav />
        <main className="market-detail-page">
          <section>
            <header></header>
            <div>No market with id {urlMarketId}</div>
          </section>
        </main>
      </>
    )
    if (marketItem) {
      const { market_name, hero_image, schedule, market_description } = marketItem
      const address = marketItem.market_location.split('****')[0]
      const latLon = marketItem.market_location.split('****')[1]
      const paragraphs = market_description.split('****')
      const descriptionHTML = paragraphs.map((para, i) => <p key={i}>{para}</p>)
      const marketVendors = vendors.filter(vendor => {
        return vendor.market_id.toString() === urlMarketId.toString()
      })
      const vendorListHTML = marketVendors.map(vendor => {
        return <li key={vendor.id}><strong>{vendor.vendor_name}</strong> (Stall {vendor.market_stall})<br/>{vendor.vendor_description}</li>
      });

      const styles = {
        heroContainer: {
          backgroundImage: `url(${hero_image})`
        }
      };

      content = (
        <>
          <Nav />
          <main className="market-detail-page">
            <header className="hero" style={styles.heroContainer} role="banner"></header>
            <section>
              <header>
                <h2>{market_name}</h2>
              </header>
              <div className="market-info">
                <h5>WHEN</h5>
                {schedule}
                <h5>WHERE</h5>
                <address>{address}</address> | <a href={latLon} target="_blank" rel="noopener noreferrer">Map</a>
                <h5>ABOUT THIS MARKET</h5>
                {descriptionHTML}
                <h5>FARMS AND SELLERS</h5>
                <ul className="vendor-list">
                  {vendorListHTML}
                </ul>
              </div>
            </section>
          </main>
        </>
      )
    }

    return content
  }
}


export default MarketDetail;
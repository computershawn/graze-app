import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import './MarketList.css'
import MarketCard from '../MarketCard/MarketCard'
import MarketDataContext from '../MarketDataContext'


class MarketList extends Component {
  static contextType = MarketDataContext;
  render() {
    const { markets=[] } = this.context;
    const marketsListHTML = markets.map(m =>
        <MarketCard
        key={m.id}
        market_id={m.id}
        market_name={m.market_name}
        market_schedule={m.schedule}
        market_address={m.market_location}
        market_summary={m.summary}
      />
    );

    return (
      <>
        <Nav />
        <main role="main">
          <header role="banner">
            <h1>Farmer's Markets</h1>
            {/* <p>
              <em>Within <a href="http://nothing.com">2 miles of 90025</a></em>
            </p> */}
          </header>
          {marketsListHTML}
        </main>
      </>
    );
  }
}

export default MarketList
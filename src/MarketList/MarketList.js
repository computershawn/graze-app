import React, { Component } from 'react';
import './MarketList.css';
import MarketCard from '../MarketCard/MarketCard';
// In production, markets info will
// be retrieved from database 
import dummyStore from '../dummy-store'



class MarketList extends Component {
  render() {
    const marketsListHTML = dummyStore.markets.map(m =>
      <MarketCard
        key={m.id}
        market_name={m.title}
        market_schedule={m.schedule}
        market_address={m.address}
        market_summary={m.summary}
      />
    );

    return (
      <main role="main">
        <header role="banner">
          <h1>Farmer's Markets</h1>
          <p>
            <em>Within <a href="http://nothing.com">2 miles of 90025</a></em>
          </p>
        </header>
        {marketsListHTML}
      </main>
    );
  }
}

export default MarketList
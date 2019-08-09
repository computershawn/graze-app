import React, { Component } from 'react';
import './MarketList.css';
import Market from '../market/Market';


class MarketList extends Component {
  render() {
    const markets = [{
      id: 123,
      title: `Baldwin Hills Crenshaw Farmers Market`,
      schedule: `Saturdays from 9 a.m. to 5 p.m.`,
      address: `3650 W. Martin Luther King Jr. Blvd.`,
      info: `Praesent sagittis a mi sit amet dictum. Donec orci nibh, dignissim in leo et, congue semper mauris. Donec elit lacus,
    dictum et placerat eget, rhoncus sodales erat.`,
    },
    {
      id: 456,
      title: `Boyle Heights Community Market`,
      schedule: `Sundays from 3:30 to 9 p.m.`,
      address: `1831 E. 1st St.`,
      info: `Praesent sagittis a mi sit amet dictum. Donec orci nibh, dignissim in leo et, congue semper mauris. Donec elit lacus,
    dictum et placerat eget, rhoncus sodales erat.`,
    },
    {
      id: 789,
      title: `Mar Vista Farmer's Market`,
      schedule: `Sundays from 9 a.m. to 2 p.m.`,
      address: `3826 Grand View Blvd`,
      info: `Praesent sagittis a mi sit amet dictum. Donec orci nibh, dignissim in leo et, congue semper mauris. Donec elit lacus,
    dictum et placerat eget, rhoncus sodales erat.`,
    }]

    const marketsListHTML = markets.map(m =>
      <Market 
        key={m.id}
        market_name={m.title}
        market_schedule={m.schedule}
        market_address={m.address}
        market_info={m.info}
        market_ />
    );

    return (
      <div>
        <nav role="navigation">Nav</nav>
        <main role="main">
          <header role="banner">
            <h1>Farmer's Markets</h1>
            <p>
              <em>Within 2 miles of 90025</em>
            </p>
          </header>
          {marketsListHTML}
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default MarketList
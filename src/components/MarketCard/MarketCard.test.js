import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MarketCard from './MarketCard'


it('renders without crashing', () => {
  const div = document.createElement('div');
  const marketProps={
    market_id: 1,
    market_name: 'Market Name',
    market_schedule: 'Monday thru Friday 9am-5pm',
    market_location: '1234 5th Street in Town City',
    market_summary: 'It is a market that is all'
  }
  ReactDOM.render(
    <BrowserRouter>
      <MarketCard {...marketProps}/>
    </BrowserRouter>,
    div
  );
})
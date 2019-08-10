import React, { Component } from 'react';
import './App.css';
import MarketList from './components/MarketList/MarketList';
import MarketDetail from './components/MarketDetail/MarketDetail';
import EditMarketDetail from './components/EditMarketDetail/EditMarketDetail';

class App extends Component {
  render() {
    const marketProps = {
      title: `Baldwin Hills Crenshaw Farmers Market`,
      hero_image: `https://images.unsplash.com/photo-1498579397066-22750a3cb424?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80`,
      schedule: `Saturdays from 9 a.m. to 5 p.m.`,
      address: `3650 W. Martin Luther King Jr. Blvd.`,
      description: `The Baldwin Hills Crenshaw Farmers Market has offered locally-grown fruits and vegetables, and freshly-prepared foods for over 25 years. Here is some more information sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.****Here's even more information ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.`,
      categories: [`Fruits`, `Vegetables`, `Bakery`, `Live Music`],
      vendor_list: [
        { id: 110, title: `At vero eos et accusamus`, stall: `H-1` },
        { id: 111, title: `Et iusto odio`, stall: `H-2` },
        { id: 112, title: `Dignissimos ducimus`, stall: `H-3` },
        { id: 113, title: `Qui blanditiis`, stall: `H-4` },
        { id: 114, title: `Praesentium voluptatum`, stall: `H-5` },
        { id: 115, title: `Deleniti atque`, stall: `H-6` },
        { id: 116, title: `Corrupti quos dolores`, stall: `H-7` },
        { id: 117, title: `Et quas molestias`, stall: `H-8` },
        { id: 118, title: `Excepturi`, stall: `H-9` },
        { id: 119, title: `Sint occaecati`, stall: `H-10` },
        { id: 120, title: `Cupiditate non provident`, stall: `H-11` },
        { id: 121, title: `Similique sunt`, stall: `H-12` }
      ]
    }    
    return (
      <div className="App">
        {/* <MarketList /> */}
        {/* <MarketDetail marketProps={marketProps}/> */}
        <EditMarketDetail />
      </div>
    );
  }
}

export default App;

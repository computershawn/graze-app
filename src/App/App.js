import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MarketList from '../MarketList/MarketList'
import MarketDetail from '../MarketDetail/MarketDetail'
import EditMarketDetail from '../EditMarketDetail/EditMarketDetail'
import CreateVendor from '../CreateVendor/CreateVendor'
import SearchMarketItems from '../SearchMarketItems/SearchMarketItems'
import Landing from '../Landing/Landing'
import './App.css'


class App extends Component {
  render() {
    return (
      <>
        <nav role="navigation">Nav</nav>
        <Route exact path='/' component={Landing} />
        <Route exact path='/markets' component={MarketList} />
        <Route path='/markets/99' component={MarketDetail} />
        <Route path='/markets/edit/99' component={EditMarketDetail} />
        <Route path='/create-vendor' component={CreateVendor} />
        <Route path='/search' component={SearchMarketItems} />
        <footer>Footer</footer>
      </>
    );
  }
}

export default App;

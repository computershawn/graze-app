import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MarketList from '../MarketList/MarketList'
import MarketDetail from '../MarketDetail/MarketDetail'
import EditMarketDetail from '../EditMarketDetail/EditMarketDetail'
import CreateVendor from '../CreateVendor/CreateVendor'
import SearchMarketItems from '../SearchMarketItems/SearchMarketItems'
import Landing from '../Landing/Landing'
import SiteFooter from '../SiteFooter/SiteFooter'
import './App.css'


class App extends Component {
  render() {
    return (
      <>
        <Route exact path='/' component={Landing} />
        <Route exact path='/markets' component={MarketList} />
        <Route path='/markets/:marketId' component={MarketDetail} />
        <Route path='/search' component={SearchMarketItems} />
        <Route path='/edit-market/:marketId' component={EditMarketDetail} />
        <Route path='/create-vendor' component={CreateVendor} />
        <SiteFooter />
      </>
    );
  }
}

export default App

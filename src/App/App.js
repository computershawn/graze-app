import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MarketList from '../MarketList/MarketList'
import MarketDetail from '../MarketDetail/MarketDetail'
import EditMarketDetail from '../EditMarketDetail/EditMarketDetail'
import CreateVendor from '../CreateVendor/CreateVendor'
import CreateProduct from '../CreateProduct/CreateProduct'
import ProductList from '../ProductList/ProductList'
import UpdateProduct from '../UpdateProduct/UpdateProduct'
import SearchMarketItems from '../SearchMarketItems/SearchMarketItems'
import Landing from '../Landing/Landing'
import SiteFooter from '../SiteFooter/SiteFooter'
import MarketDataContext from '../MarketDataContext'
import config from '../config'
import './App.css'


class App extends Component {
  state = {
    products: [],
    pricelist: [],
    vendors: [],
    markets: []
  };

  setMarketData = values => {
    this.setState(
      { ...values }
    )
  }

  addProduct = (p) => {
    fetch(`${config.API_ENDPOINT}/products`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      },
      body: JSON.stringify(p)
      // body data type must match "Content-Type" header)
    })
      .then(function (response) {
        return response.json()
      })
      .then(newProduct => {
        let newProductsState = [...this.state.products, newProduct]
        this.setState({ products: newProductsState })
      })
  }

  deleteProduct = pID => {
    const newProducts = this.state.products.filter(p =>
      p.id.toString() !== pID.toString()
    )
    this.setState({
      products: newProducts
    })
  }


  updateProduct = (p) => {
    fetch(`${config.API_ENDPOINT}/products/${p.id}`, {
      method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      },
      body: JSON.stringify(p)
      // body data type must match "Content-Type" header)
    })
      .then(res => {
        if (!res.ok) {
          // get the error message from the response,
          return res.json().then(error => {
            // then throw it
            throw error
          })
        }
        return res
      })
      .then(data => {
        console.log(p)
        let oldProductsState = this.state.products
        let newProductsState = oldProductsState.map(item => {
          if (item.id.toString() === p.id) {
            return {
              id: parseInt(p.id),
              product_description: p.product_description,
              product_name: p.product_name
            }
          }
          return item
        })
        this.setState({ products: newProductsState })
      })
      .catch(error => {
        console.error(error)
      })
  }

  componentDidMount() {
    let tables = ['products', 'pricelist', 'vendors', 'markets']
    let apiRequests = tables.map(table => {
      return fetch(`${config.API_ENDPOINT}/${table}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${config.API_KEY}`
        }
      })
        .then(function (response) {
          const listOfThingsJSON = response.json();
          return listOfThingsJSON;
        });
    })
    let combinedData = {
      'products': {}, 'markets': {}, 'vendors': {}, 'pricelist': {},
    };
    Promise.all(apiRequests).then(function (values) {
      combinedData["products"] = values[0];
      combinedData["pricelist"] = values[1];
      combinedData["vendors"] = values[2];
      combinedData["markets"] = values[3];

      return combinedData;
    }).then(data => {
      this.setMarketData(data)
    })
  }

  render() {
    const contextValue = {
      products: this.state.products,
      markets: this.state.markets,
      vendors: this.state.vendors,
      pricelist: this.state.pricelist,
      addProduct: this.addProduct,
      deleteProduct: this.deleteProduct,
      updateProduct: this.updateProduct,
    }
    return (
      <MarketDataContext.Provider value={contextValue}>
        <>
          <Route exact path='/' component={Landing} />
          <Route exact path='/markets' component={MarketList} />
          <Route path='/markets/:marketId' component={MarketDetail} />
          <Route path='/search' component={SearchMarketItems} />
          <Route path='/edit-market/:marketId' component={EditMarketDetail} />
          <Route path='/create-vendor' component={CreateVendor} />
          <Route path='/new-product' component={CreateProduct} />
          <Route path='/all-products' component={ProductList} />
          <Route path='/update/:productId' component={UpdateProduct} />
          <SiteFooter />
        </>
      </MarketDataContext.Provider>
    );
  }
}

export default App

import React from 'react'

// const MarketsContext = React.createContext({
//  notes: [],
//  folders: [],
//  addNote: () => {},
//  deleteNote: () => {},
//  addFolder: () => {},
//  deleteFolder: () => {},
// })

const MarketDataContext = React.createContext({
  products: [],
  pricelist: [],
  vendors: [],
  markets: [],
  addProduct: () => { },
  deleteProduct: () => { },
  updateProduct: () => { }
})

export default MarketDataContext
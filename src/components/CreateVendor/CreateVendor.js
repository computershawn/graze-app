import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import './CreateVendor.css';




class CreateVendor extends Component {
  // constructor(props) {
  //   super(props);
  //   let newCats = {}
  //   dummyStore.vendorCategories.forEach(cat => {
  //     newCats[cat] = false
  //   })
  //   this.state = {
  //     vendorName: `example: Veggies Etc`,
  //     stallNumber: `example: A-23`,
  //     description: `History and any other important information about this vendor stall...`,
  //     market: null,
  //     categories: newCats,
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleInputChange = this.handleInputChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleSubmit(e) {
  //   console.log(this.state)
  //   e.preventDefault()
  //   // Add code to insert this new vendor info into the database >>>
  // }

  // handleChange(e) {
  //   const { name, value } = e.target
  //   this.setState({ [name]: value });
  // }

  // handleInputChange(e) {
  //   const target = e.target
  //   const name = e.target.name

  //   // We can use handleInputChange for multiple
  //   // different types of inputs
  //   if (target.type === 'checkbox') {
  //     let newCats = { ...this.state.categories, [name]: target.checked }
  //     this.setState({
  //       categories: newCats
  //     });
  //   } else {
  //     this.setState({
  //       [name]: target.value
  //     });
  //   }
  // }

  // makeCheckboxes() {
  //   const { categories } = this.state
  //   const catKeys = Object.keys(categories)
  //   const inputsHTML = catKeys.map(catName => {
  //     return (
  //       <label key={catName} className="checkbox-category">
  //         <input name={catName} type="checkbox" checked={categories[catName]}
  //           onChange={this.handleInputChange} />{catName}
  //       </label>
  //     )
  //   })
  //   return inputsHTML
  // }

  // render() {
  //   const { vendorName, stallNumber, description } = this.state
  //   return (
  //     <>
  //       <Nav />
  //       <main>
  //         <header>
  //           <h1>Create New Vendor</h1>
  //         </header>
  //         <section>
  //           <form onSubmit={this.handleSubmit}>
  //             <div className="form-section">
  //               <label htmlFor="vendorName">Name</label>
  //               <input type="text" name="vendorName" placeholder={vendorName} onChange={this.handleChange} required />
  //             </div>

  //             <div className="form-section">
  //               <label htmlFor="market">Market</label>
  //               <select name="market" onChange={this.handleChange} required>
  //                 {dummyStore.marketNames.map(marketName => {
  //                   let val = marketName === '-' ? '' : marketName
  //                   return <option key={marketName} value={val}>{marketName}</option>
  //                 })}
  //               </select>
  //             </div>

  //             <div className="form-section">
  //               <label htmlFor="stallNumber">Stall Number</label>
  //               <input type="text" name="stallNumber" placeholder={stallNumber} onChange={this.handleChange} required />
  //             </div>

  //             <div className="form-section">
  //               <label htmlFor="description">Description</label>
  //               <textarea placeholder={description} name="description" rows="10" onChange={this.handleChange} required />
  //             </div>

  //             <div className="form-section">
  //               <label>Categories</label>
  //               {this.makeCheckboxes()}
  //             </div>

  //             <hr />

  //             <button type="submit">Submit</button>
  //           </form>
  //         </section>
  //       </main>
  //     </>
  //   );
  // }
}

export default CreateVendor;
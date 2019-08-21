import React, { Component } from 'react';
import Nav from '../Nav/Nav'
import './EditMarketDetail.css';




class EditMarketDetail extends Component {
  // constructor(props) {
  //   super(props)
  //   const { description, schedule, address, categories } = dummyStore.markets[0]
  //   const days = { 'Sun': false, 'Mon': false, 'Tue': false, 'Wed': false, 'Thu': false, 'Fri': false, 'Sat': false }
  //   this.state = {
  //     startAMPM: 'AM',
  //     endAMPM: 'PM',
  //     description: description,
  //     days: days,
  //     schedule: schedule,
  //     address: address,
  //     categories: categories,
  //     vendors: dummyStore.vendorNames
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleInputChange = this.handleInputChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleSubmit(e) {
  //   console.log(this.state)
  //   e.preventDefault()
  //   // ...Insert code to send this market
  //   // info to the database >>>
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
  //     let newDays = { ...this.state.days, [name]: target.checked }
  //     this.setState({
  //       days: newDays
  //     });
  //   } else {
  //     this.setState({
  //       [name]: target.value
  //     });
  //   }
  // }

  // makeCheckboxes() {
  //   const { days } = this.state
  //   const daysKeys = Object.keys(days)
  //   const inputsHTML = daysKeys.map(day => {
  //     return (
  //       <label key={day} className="checkbox-inline">
  //         <input name={day} type="checkbox" checked={days[day]}
  //           onChange={this.handleInputChange} />{day}
  //       </label>
  //     )
  //   })
  //   return inputsHTML
  // }

  // render() {
  //   // const { categories, vendors, description, schedule, address } = this.state

  //   let urlMarketId = this.props.match.params.marketId
  //   let marketItem = dummyStore.markets.find(market => (market.id.toString() === urlMarketId.toString()))

  //   if(!marketItem) {
  //     return (
  //       <>
  //         <Nav />
  //         <main>
  //           <section>
  //             <header></header>
  //             <div>No market with id {urlMarketId}</div>
  //           </section>
  //         </main>
  //       </>
  //     )  
  //   }

  //   //console.log(marketItem.title)
  //   const { title, categories, vendors, description, schedule, address } = marketItem

  //   return (
  //     <>
  //       <Nav />
  //       <main>
  //         <header>
  //           <h1>Edit Market Details</h1>
  //           <p>{title}</p>
  //         </header>
  //         <section>
  //           <form onSubmit={this.handleSubmit}>
  //             <div className="form-section">
  //               <label htmlFor="description">Description</label>
  //               <textarea value={description} name="description" rows="10" onChange={this.handleChange} required />
  //             </div>

  //             <div className="form-section">
  //               {/*this.makeCheckboxes()*/}
  //               <label htmlFor="schedule">Days</label>
  //               <input type="text" name="schedule" value={schedule} onChange={this.handleChange} required />
  //             </div>

  //             <div className="form-section">
  //               <label htmlFor="address">Address</label>
  //               <input type="text" name="address" value={address} onChange={this.handleChange} required />
  //             </div>

  //             <div className="form-section">
  //               <label htmlFor="categories">Categories</label>
  //               <input type="text" name="categories" value={categories} onChange={this.handleChange} required />
  //             </div>

  //             <div className="form-section">
  //               <label htmlFor="vendors">Vendors</label>
  //               <input type="text" name="vendors" value={vendors} onChange={this.handleChange} required />
  //             </div>

  //             <hr />

  //             {/* <div className="form-section">
  //             <p className="schedule-title">Start Time</p>
  //             <input type="number" name="start-time" placeholder="10" min="1" max="12" required="" />
  //             <select defaultValue={this.state.startAMPM} onChange={this.handleChange}>
  //               <option>AM</option>
  //               <option>PM</option>
  //             </select>
  //             <hr />
  //             <p className="schedule-title">End Time</p>
  //             <input type="number" name="end-time" placeholder="2" min="1" max="12" required="" />
  //             <select defaultValue={this.state.endAMPM} onChange={this.handleChange}>
  //               <option>AM</option>
  //               <option>PM</option>
  //             </select>
  //           </div> */}
  //             <button type="submit">Submit</button>
  //           </form>
  //         </section>
  //       </main>
  //     </>
  //   );
  // }
}

export default EditMarketDetail;
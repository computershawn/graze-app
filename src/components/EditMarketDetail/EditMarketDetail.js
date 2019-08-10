import React, { Component } from 'react';
import './EditMarketDetail.css';


// In production, vendor info will
// be retrieved from database 
const tempVendors = [
  'At Vero Eos Et Accusamus | H-12',
  'Et Iusto Odio | H-12',
  'Dignissimos Ducimus | H-12',
  'Qui Blanditiis | H-12',
  'Praesentium Voluptatum | H-12',
  'Deleniti Atque | H-12',
  'Corrupti Quos Dolores | H-12',
  'Et Quas Molestias | H-12',
  'Excepturi | H-12',
  'Sint Occaecati | H-12',
  'Cupiditate Non Provident | H-12',
  'Similique Sunt | H-12'
]

// In production, categories info
// will be retrieved from database 
const tempCategories = [
  'Fruits',
  'Vegetables',
  'Bakery',
  'Live Music'
]

// In production, description, schedule and
// address will be retrieved from database 
const tempDescription = `The Baldwin Hills Crenshaw Farmers Market has offered locally-grown fruits and vegetables, and freshly-prepared foods for over 25 years. Here is some more information sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Here's even more information ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.`
const tempSchedule = 'Saturdays from 9 a.m. to 5 p.m.'
const tempAddress = '3650 W. Martin Luther King Jr. Blvd.'


class EditMarketDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startAMPM: 'AM',
      endAMPM: 'PM',
      description: tempDescription,
      days: {
        'Sun': false, 'Mon': false, 'Tue': false, 'Wed': false, 'Thu': false, 'Fri': false, 'Sat': false
      },
      schedule: tempSchedule,
      address: tempAddress,
      categories: tempCategories,
      vendors: tempVendors
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log(this.state)
    e.preventDefault()
    // ...Insert code to send this market
    // info to the database >>>
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value });
  }

  handleInputChange(e) {
    const target = e.target
    const name = e.target.name

    // We can use handleInputChange for multiple
    // different types of inputs
    if (target.type === 'checkbox') {
      let newDays = { ...this.state.days, [name]: target.checked }
      this.setState({
        days: newDays
      });
    } else {
      this.setState({
        [name]: target.value
      });
    }
  }

  makeCheckboxes() {
    const { days } = this.state
    const daysKeys = Object.keys(days)
    const inputsHTML = daysKeys.map(day => {
      return (
        <label key={day} className="checkbox-inline">
          <input name={day} type="checkbox" checked={days[day]}
            onChange={this.handleInputChange} />{day}
        </label>
      )
    })
    return inputsHTML
  }

  render() {
    const { categories, vendors } = this.state
    return (
      <main>
        <header>
          <h1>Edit Market Details</h1>
        </header>
        <section>
          <form onSubmit={this.handleSubmit}>
            <div className="form-section">
              <label htmlFor="description">Description</label>
              <textarea value={this.state.description} name="description" rows="10" onChange={this.handleChange} required />
            </div>

            <div className="form-section">
              {/*this.makeCheckboxes()*/}
              <label htmlFor="schedule">Days</label>
              <input type="text" name="schedule" value={this.state.schedule} onChange={this.handleChange} required />
            </div>

            <div className="form-section">
              <label htmlFor="address">Address</label>
              <input type="text" name="address" value={this.state.address} onChange={this.handleChange} required />
            </div>

            <div className="form-section">
              <label htmlFor="categories">Categories</label>
              <input type="text" name="categories" value={categories} onChange={this.handleChange} required />
            </div>

            <div className="form-section">
              <label htmlFor="vendors">Vendors</label>
              <input type="text" name="vendors" value={vendors} onChange={this.handleChange} required />
            </div>

            <hr />

            {/* <div className="form-section">
              <p className="schedule-title">Start Time</p>
              <input type="number" name="start-time" placeholder="10" min="1" max="12" required="" />
              <select defaultValue={this.state.startAMPM} onChange={this.handleChange}>
                <option>AM</option>
                <option>PM</option>
              </select>
              <hr />
              <p className="schedule-title">End Time</p>
              <input type="number" name="end-time" placeholder="2" min="1" max="12" required="" />
              <select defaultValue={this.state.endAMPM} onChange={this.handleChange}>
                <option>AM</option>
                <option>PM</option>
              </select>
            </div> */}
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
    );
  }
}

export default EditMarketDetail;
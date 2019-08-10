import React, { Component } from 'react';
import './MarketDetail.css';


class MarketDetail extends Component {
  render() {
    const { title, /*hero_image,*/ schedule, address, categories, vendor_list } = this.props.marketProps
    const paragraphs = this.props.marketProps.description.split('****')
    const descriptionHTML = paragraphs.map((para, i) => <p key={i}>{para}</p>)
    const cats = categories.join(', ')
    const vendorList = vendor_list.map(vendor => {
      return <li key={vendor.id}>{vendor.title} | {vendor.stall}</li>
    });


    return (
      <main>
        <header className="hero" role="banner"></header>
        <section>
          <header>
            <h2>{title}</h2>
          </header>
          <div className="description">
              <p><span className="detail-label">When:</span> {schedule}</p>
              <p><span className="detail-label">Where:</span> {address} | <a href="https://maps.google.com">Map</a></p>
              <p><span className="detail-label">Vendors:</span> {vendor_list.length}</p>
              <p><span className="detail-label">Categories:</span> {cats}</p>
            {descriptionHTML}
          </div>
        </section>
        <section>
          <header>
            <h3>Vendors At This Market</h3>
            <ul className="vendor-list">
              {vendorList}
            </ul>
          </header>
        </section>
      </main>
    );
  }
}

export default MarketDetail;
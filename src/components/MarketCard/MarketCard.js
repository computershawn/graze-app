import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './MarketCard.css';


class MarketCard extends Component {
  render() {
    const { market_id, market_name, market_schedule, market_summary } = this.props
    const address = this.props.market_location.split('****')[0]
    const latLon = this.props.market_location.split('****')[1]
    return (
      <article className="market-info">
        <h3>{market_name}</h3>
        <h5>WHEN</h5>
          {market_schedule}
          <h5>WHERE</h5>
          <address>{address}</address> | <a href={latLon} target="_blank" rel="noopener noreferrer">Map</a>
        <h5>SUMMARY</h5>
        {market_summary}
        <p><Link to={`/markets/${market_id}`}>Learn More</Link></p>
      </article>
    );
  }
}

MarketCard.propTypes = {
  market_id: PropTypes.number.isRequired,
  market_name: PropTypes.string.isRequired,
  market_schedule: PropTypes.string.isRequired,
  market_location: PropTypes.string.isRequired,
  market_summary: PropTypes.string.isRequired,
};


export default MarketCard;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MarketCard.css';


class MarketCard extends Component {
  render() {
    const { market_name, market_schedule, market_address, market_summary } = this.props
    return (
      <article>
        <div>
          <h2>{market_name}</h2>
          <p>
            When: {market_schedule}<br />
            Where: {market_address}
          </p>
        </div>
        <p>{market_summary}</p>
        <p>Learn More</p>
      </article>
    );
  }
}

MarketCard.propTypes = {
  market_name: PropTypes.string.isRequired,
  market_schedule: PropTypes.string.isRequired,
  market_address: PropTypes.string.isRequired,
  market_summary: PropTypes.string.isRequired,
};


export default MarketCard;
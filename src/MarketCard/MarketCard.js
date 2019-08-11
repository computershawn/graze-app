import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MarketCard.css';


class MarketCard extends Component {
  render() {
    const { market_name, market_schedule, market_address, market_summary } = this.props
    return (
      <article>
        <h3>{market_name}</h3>
        <p><strong>When</strong>: {market_schedule}</p>
        <p><strong>Where</strong>: {market_address}</p>
        <p>{market_summary}</p>
        <p><a href="http://nothing.com">Learn More</a></p>
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
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MarketDetail from './MarketDetail'

describe(`MarketDetail component`, () => {
  const p = {
    match: {
      params: {
        marketId: 1
      }
    }
  }
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <MarketDetail {...p} />
      </BrowserRouter>,
      div
    );
  })
  it('Renders quite nicely', () => {
    const wrapper = shallow(<MarketDetail {...p} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})



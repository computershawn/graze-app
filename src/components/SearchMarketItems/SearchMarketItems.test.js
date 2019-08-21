import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import SearchMarketItems from './SearchMarketItems'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SearchMarketItems />
    </BrowserRouter>,
    div
  );
})

it('renders empty given no tabs', () => {
  const wrapper = shallow(<SearchMarketItems />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
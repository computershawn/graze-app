import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import SiteFooter from './SiteFooter'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SiteFooter />
    </BrowserRouter>,
    div
  );
})

it('renders empty given no tabs', () => {
  const wrapper = shallow(<SiteFooter />)
  expect(toJson(wrapper)).toMatchSnapshot()
})
import { shallow } from 'enzyme'
import React from 'react'
import Component from './index.js'

describe('themes/benz/Components/Template', () => {
  describe('Component', () => {
    it('renders a single div', () => {
      const wrapper = shallow(<Component />)
      expect(wrapper.find('div')).toBeDefined()
    })
  })
})

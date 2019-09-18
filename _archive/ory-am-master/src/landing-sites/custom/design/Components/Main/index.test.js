import { shallow } from 'enzyme'
import React from 'react'
import Component from './index.js'

const Editable = () => <div />

describe('themes/benz/Components/Main', () => {
  describe('Component', () => {
    it('renders a single div', () => {
      const wrapper = shallow(<Component Editable={Editable} />)
      expect(wrapper.find('div')).toBeDefined()
    })
  })
})

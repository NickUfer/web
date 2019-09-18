// @flow
import React, { Component } from 'react'
import { StickyContainer } from 'react-sticky'
import Header from '../Header'
import Content from '../Main'

import './index.css'

const Benz = (props) => (
  <StickyContainer>
    <div className="benz">
      <Header {...props} />
      <Content {...props} />
    </div>
  </StickyContainer>
)

export default Benz

// @flow
import React, { Component } from 'react'
import { StickyContainer } from 'react-sticky'
import Header from '../Header'
import Content from '../Main'
import type { Config } from '../../type'

class Benz extends Component {
  props: { config: Config }

  render() {
    const { props } = this

    return (
      <StickyContainer>
        <div className="benz">
          <Header {...props} />
          <Content {...props} />
        </div>
      </StickyContainer>
    )
  }
}

export default Benz

// @flow
import React from 'react'

import './index.css'

const Main = ({ Editable }) => (
  <div className="benz-main">
    <div className="benz-main-inner">
      <Editable id="main" className="editable-area" />
    </div>
  </div>
)

export default Main

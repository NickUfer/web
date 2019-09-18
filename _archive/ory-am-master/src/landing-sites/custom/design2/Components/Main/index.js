// @flow
import React from 'react'

const Main = ({ Editable }: { Editable: any }) => (
  <div className="benz-main">
    <div className="benz-main-inner">
      <Editable id="main" className="editable-area" />
    </div>
  </div>
)

export default Main

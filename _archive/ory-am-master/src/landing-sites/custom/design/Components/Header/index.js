// @flow
import React from 'react'
import StickyTopMenu from '../StickyTopMenu/index.js'

import './index.css'

const Header = ({
  Editable,
  config: { headerTitle = 'benz' } = {},
  menus = { main: [] }
}) => (
  <div className="benz-header">
    <StickyTopMenu Editable={Editable} menu={menus.main} title={<span><strong>ORY</strong> SITES</span>} />
  </div>
)

export default Header

// @flow
import React from 'react'
import type { ItemType } from '../../../../common/js/type'
import StickyTopMenu from '../../../../common/component/StickyTopMenu'
import MenuItem from '../../../../common/component/MenuItem'
import { Sticky } from 'react-sticky'
import type { Config } from '../../type'

type Props = { Editable: any, config: Config, menus: { main: Array<ItemType> } }

const Header = ({
  Editable,
  config: { headerTitle = 'benz' } = {},
  menus = { main: [] }
}: Props) => (
  <div className="benz-header">
    <StickyTopMenu Editable={Editable} menu={menus.main} title={headerTitle} />
  </div>
)

export default Header

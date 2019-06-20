import React, { ReactNode } from 'react'
import { Menu, IconMenu } from './header'

import 'normalize.css'
import '../styles/global.css'
import '../styles/grid.css'
import '../styles/typography.css'

import Header from './header'

const Layout = ({ children, menu, icons, tiny }: { children: ReactNode, menu: Menu, icons: IconMenu, tiny: boolean }) => (
  <>
    <Header menu={menu} icons={icons} tiny={tiny} />
    <main>{children}</main>
    <footer>
    </footer>
  </>
)

export default Layout

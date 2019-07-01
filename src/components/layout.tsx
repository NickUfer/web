import React, { ReactNode } from 'react'
import { Menu, IconMenu } from './header'

import Header from './header'
import Announcement from './announcement'

import 'normalize.css'
import '../styles/global.css'
import '../styles/grid.css'
import '../styles/typography.css'

const Layout = ({
  children,
  menu,
  icons,
  tiny,
  announcement,
}: {
  children: ReactNode
  menu: Menu
  icons: IconMenu
  tiny: boolean
  announcement?: ReactNode
}) => (
  <>
    {announcement ? <Announcement>{announcement}</Announcement> : null}
    <Header menu={menu} icons={icons} tiny={tiny} />
    <main>{children}</main>
    <footer></footer>
  </>
)

export default Layout

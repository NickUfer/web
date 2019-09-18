import React, { ReactNode } from 'react'

// DO NOT CHANGE THE ORDER OF THESE
import 'normalize.css'
import '../styles/themes/default.css'
import '../styles/global.css'
import '../styles/grid.css'
import '../styles/typography.css'
// DO NOT CHANGE THE ORDER OF THESE

import { Menu, IconMenu } from './header'
import Header from './header'
import Announcement from './announcement'
import Footer from './footer'

import github from '../images/github.svg'
import discord from '../images/discord.svg'
import discourse from '../images/discourse.svg'

const defaultMenu: Menu = [
  {
    title: 'Home',
    path: '/',
    className: 'hidden-sm',
  },
  { title: 'Docs', href: '/docs' },
  { title: 'Blog', path: '/blog' },
]

const defaultIconMenu: IconMenu = [
  { title: 'GitHub', image: github, href: 'https://github.com/ory/hydra' },
  { title: 'Chat', image: discord, href: 'https://www.ory.sh/chat' },
  { title: 'Forum', image: discourse, href: 'https://community.ory.sh/' },
]

const Layout = ({
  children,
  menu = defaultMenu,
  icons = defaultIconMenu,
  announcement,
  appendix = '',
  theme = 'default',
}: {
  children: ReactNode
  menu?: Menu
  icons?: IconMenu
  announcement?: ReactNode
  theme?: string
  appendix?: string
}) => (
  <div className={`theme-${theme}`}>
    {announcement ? <Announcement>{announcement}</Announcement> : null}
    <Header appendix={appendix} menu={menu} icons={icons} />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout

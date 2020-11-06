import React, { ReactNode } from 'react'

// DO NOT CHANGE THE ORDER OF THESE
import 'normalize.css'
import '../styles/themes/default.css'
import '../styles/global.css'
import '../styles/grid.css'
import '../styles/typography.css'
// DO NOT CHANGE THE ORDER OF THESE

import { Menu, GitHubButton } from './header'
import Header from './header'
import Footer from './footer'

const defaultMenu: Menu = [
  { title: 'Docs', href: '/docs' },
  { title: 'Blog', path: '/blog' },
  { title: 'Jobs', href: 'https://github.com/ory/jobs' },
  { title: 'Support', href: 'https://github.com/ory/open-source-support/blob/master/README.md' },
  { title: 'Chat', href: 'https://www.ory.sh/chat' },
  { title: 'Forum', href: 'https://community.ory.sh/' },
]

const defaultGitHubButton = ({
  githubLink = 'https://github.com/ory',
}): GitHubButton => [
  { title: 'GitHub',
    href: githubLink },
]

const Layout = ({
  children,
  menu = defaultMenu,
  githubbutton = defaultGitHubButton,
  appendix = '',
  theme = 'default',
  githubLink,
}: {
  children: ReactNode
  menu?: Menu
  githubbutton?: typeof defaultGitHubButton
  theme?: string
  appendix?: string
  githubLink?: string
}) => (
  <div className={`theme-${theme}`}>
    <Header appendix={appendix} menu={menu} githubbutton={githubbutton({ githubLink })} />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout

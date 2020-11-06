import React from 'react'
import MobileMenu from './mobile-menu'
import { Link, navigate } from 'gatsby'

import * as styles from './header.module.css'
import logoTiny from '../images/logo-ory-symbol.svg'
import logo from '../images/logo-ory.svg'
import cn from 'classnames'

export type MenuItem = {
  title: string
  href?: string
  path?: string
  className?: string
}

export type githubbuttonItem = {
  title: string
  href: string
}

export type Menu = MenuItem[]
export type GitHubButton = githubbuttonItem[]

interface PropTypes {
  menu: Menu
  githubbutton: GitHubButton
  appendix: string
}

const Header = ({ menu = [], githubbutton = [], appendix }: PropTypes) => (
  <header className={styles.header}>
    <div className="container-fluid">
      <div className="row middle-sm">
        <div className="col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-sm-10 col-md-10 col-lg-10">
          <div className="row middle-sm">
            <div className={styles.logo} onClick={() => navigate('/')}>
              <img src={logo} className="hidden-sm hidden-md" />
              <span className={cn(styles.projectName, 'hidden-sm hidden-md')}>
                {appendix ? `/ ${appendix}` : null}
              </span>
              <img src={logoTiny} className="hidden-lg" />
              <span
                className={cn(
                  styles.projectName,
                  styles.projectNameTiny,
                  'hidden-lg'
                )}
              >
                {appendix}
              </span>
            </div>
            <div className={styles.leftMenu}>
              <nav className={styles.menu}>
                <ul className="hidden-sm hidden-md">
                  {menu.map(({ href, title, className = '', path }, k) => (
                    <li key={k} className={className}>
                      {path && <Link to={path}>{title}</Link>}
                      {href && <a href={href}>{title}</a>}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className={styles.rightMenu}>
              <nav className={styles.iconMenu}>
                <ul className="hidden-sm hidden-md">
                  {githubbutton.map(({ href, title }, k) => (
                    <li>
                      <a href={href}>
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
                <MobileMenu menu={menu} githubbutton={githubbutton} />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header

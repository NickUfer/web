import React from 'react'
import MobileMenu from './mobile-menu'

import * as styles from './header.module.css'
import logoTiny from '../images/logo-ory-symbol.svg'
import logo from '../images/logo-ory.svg'
import burger from '../images/burger.svg'
import cn from 'classnames'

export type MenuItem = {
  title: string,
  href: string,
  className?: string
}

export type IconMenuItem = {
  title: string,
  href: string,
  image: string
}

export type Menu = MenuItem[]
export type IconMenu = IconMenuItem[]

interface PropTypes {
  tiny?: boolean,
  menu: Menu,
  icons: IconMenu,
}

const Header = ({ tiny = false, menu = [], icons = [] }: PropTypes) => (
  <header className={styles.header}>
    <div className="container-fluid">
      <div className="row middle-sm">
        <div className="col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-sm-10 col-md-10 col-lg-10">
          <div className="row middle-sm">
            <div className={styles.logo}>
              {tiny
                ? (
                  <>
                    <img src={logoTiny}/>
                    <span className={cn(styles.projectName, styles.projectNameTiny)}>
                        Hydra
                    </span>
                  </>
                )
                : (
                  <>
                    <img src={logo} className="hidden-sm hidden-md"/>
                    <span className={cn(styles.projectName, 'hidden-sm hidden-md')}>
                        / Hydra
                    </span>
                    <img src={logoTiny} className="hidden-lg"/>
                    <span className={cn(styles.projectName, styles.projectNameTiny, 'hidden-lg')}>
                        Hydra
                    </span>
                  </>
                )
              }
            </div>
            <div className={styles.leftMenu}>
              <nav className={styles.menu}>
                <ul className="hidden-sm hidden-md">
                  {menu.map(({ href, title, className = '' }) => (
                    <li key={href} className={className}>
                      <a href={href}>{title}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className={styles.rightMenu}>
              <nav className={styles.iconMenu}>
                <ul className="hidden-sm hidden-md">
                  {icons.map(({ href, title, image }) => (
                    <li key={href}>
                      <a href={href}><img src={image} alt={title}/></a>
                    </li>
                  ))}
                </ul>

                <MobileMenu menu={menu} icons={icons} />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)


export default Header

import React, { Component } from 'react'
import cn from 'classnames'
import { Menu, GitHubButton } from './header'
import styles from './mobile-menu.module.css'
import { Link } from 'gatsby'

interface PropTypes {
  menu: Menu
  githubbutton: GitHubButton
}

interface StateTypes {
  open: boolean
}

class MobileMenu extends Component<PropTypes, StateTypes> {
  state = {
    open: false,
  }

  toggle = () => {
    this.setState(({ open }) => ({ open: !open }))
  }

  render() {
    const { githubbutton, menu } = this.props
    return (

      <div className="hidden-lg">

              <button
                onClick={this.toggle}
                className={cn(styles.navIcon, { [styles.isActive]: this.state.open })}
                type="button">
                <div/>
              </button>
              <div className={cn(styles.navItems, { [styles.show]: this.state.open })}>
                <div className={styles.divider}/>
                <div className="container-fluid">
                  <div className="row-middle-sm">
                    <div className="col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-10">

                <div className={styles.navContainer}>
                  <ul>
                    {menu.map(({ href, title, className = '', path }, index) => (
                      <li key={`menu-${index}`} className={className}>
                        {path && <Link to={path}>{title}</Link>}
                        {href && <a href={href}>{title}</a>}
                      </li>
                    ))}
                    {githubbutton.map(({ title, href }, index) => (
                      <li key={`icon-${index}`}>
                        <a href={href}>{title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MobileMenu

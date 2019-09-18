// @flow
import React, { Component } from 'react'
import { Sticky } from 'react-sticky'
import classNames from 'classnames'
import Item from '../MenuItem'

import './index.css'

class StickyTopMenu extends Component {
  state = {
    showResponsiveMenu: false
  }

  toggleResponsive = (e) => {
    e.preventDefault()
    this.setState({ showResponsiveMenu: !this.state.showResponsiveMenu })
  }

  render() {
    const { menu = [], title } = this.props

    return (
      <nav className="menu-sticky-top">
        <Sticky
          className={classNames('menu-sticky-top-nav', {
            'is-expanded': this.state.showResponsiveMenu
          })}
          stickyStyle={{ zIndex: 10 }}
        >
          <div
            className={classNames('menu-sticky-top-nav-inner', {
              'is-expanded': this.state.showResponsiveMenu
            })}
          >
            <div className="menu-sticky-top-nav-items-container">
              <ul>
                <li
                  className={classNames(
                    'menu-sticky-top-nav-responsive-toggle',
                    { 'is-expanded': this.state.showResponsiveMenu }
                  )}
                >
                  <a onClick={this.toggleResponsive} href="#">&#9776;</a>
                </li>
                {menu.map((item) => <Item key={item.id} {...item} />)}
              </ul>
            </div>
            <div className="menu-sticky-top-brand">
              <a href="index.html">{title}</a>
            </div>
            <div style={{ clear: 'both' }} />
          </div>
        </Sticky>
      </nav>
    )
  }
}

export default StickyTopMenu

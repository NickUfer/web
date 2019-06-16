import React from 'react'
import cn from 'classnames'

import logo from '../images/logo-ory-footer.svg'
import styles from './footer.module.css'

const menu = [
  {
    title: 'Company',
    items: [
      {
        title: 'Imprint',
        href: 'https://www.ory.sh/imprint',
      },
      {
        title: 'Privacy',
        href: 'https://www.ory.sh/privacy',
      },
      {
        title: 'Terms',
        href: 'https://www.ory.sh/tos',
      },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'Docs',
        href: 'https://www.ory.sh/docs',
      },
      {
        title: 'Forum',
        href: 'https://community.ory.sh/',
      },
      {
        title: 'Chat',
        href: 'https://www.ory.sh/chat',
      },
    ],
  },
  {
    title: 'GitHub',
    items: [
      {
        title: 'ORY Hydra',
        href: 'https://github.com/ory/hydra',
      },
      {
        title: 'ORY Oathkeeper',
        href: 'https://github.com/ory/oathkeeper',
      },
      {
        title: 'ORY Keto',
        href: 'https://github.com/ory/keto',
      },
      {
        title: 'ORY Hive',
        href: 'https://github.com/ory/keto',
      },
    ],
  },
]

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10 center-mobile">
          <img src={logo} alt={'ORY logo'} />
          <p className={cn('secondary', styles.contact)}>
            <a href="mailto:hi@ory.sh">hi@ory.sh</a>
          </p>
          <p className="secondary" style={{ marginTop: 2 }}>
            &copy; 2015-2019 ORY GmbH
          </p>
        </div>
        <div className="col-lg-7 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10 center-mobile mobile-offset-64">
          <div className={cn('row', styles.menuRow)}>
            {menu.map(({ title, items }) => (
              <div key={title} className={styles.menuItem}>
                <p className={styles.listTitle}>{title}</p>
                <ul className={styles.list}>
                  {items.map(({ title, href }) => (
                    <li key={title} className={styles.item}>
                      <a href={href}>{title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer

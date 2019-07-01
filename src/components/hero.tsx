import React from 'react'
import cn from 'classnames'
import * as styles from './hero.module.css'

interface CallToAction {
  title: string
  href: string
  style?: 'primary' | 'secondary'
}

interface PropTypes {
  title: string
  subtitle: string
  cta: CallToAction[]
}

const Hero = ({ title, subtitle, cta }: PropTypes) => (
  <div className={styles.hero}>
    <div className="container-fluid">
      <div className="row">
        <div className={styles.logo} />
        <div className="col-sm-10 col-sm-offset-1  col-md-10 col-md-offset-1  col-lg-10 col-lg-offset-1">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <>
            {cta.map(({ title, href, style = 'secondary' }) => (
              <a key={title} href={href} className={cn(style, 'cta')}>
                {title}
              </a>
            ))}
          </>
        </div>
      </div>
    </div>
  </div>
)

export default Hero

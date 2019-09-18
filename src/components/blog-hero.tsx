import React, { ReactNode } from 'react'
import * as styles from './blog-hero.module.css'

interface PropTypes {
  title: string
  date?: string
  author?: string
  overline?: string
  subtitle?: string
}

const BlogHero = ({ title, date, author, overline, subtitle }: PropTypes) => (
  <>
    <div className={styles.title}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1  col-md-8 col-md-offset-1  col-lg-8 col-lg-offset-1">
            {overline && <p className={styles.subtitle}>{overline}</p>}
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
            <p className={styles.meta}>
              {date} - <span className={styles.author}>{author}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default BlogHero

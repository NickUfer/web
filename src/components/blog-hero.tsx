import React, { ReactNode } from 'react'
import * as styles from './blog-hero.module.css'

interface PropTypes {
  title: string
  subtitle: ReactNode
  date: string
}

const BlogHero = ({ title, subtitle, date }: PropTypes) => (
  <>
    <div className={styles.title}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1  col-md-8 col-md-offset-1  col-lg-8 col-lg-offset-1">
            <h1>{title}</h1>
            <p className={styles.date}>{date}</p>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.teaser}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1  col-md-8 col-md-offset-1  col-lg-8 col-lg-offset-1">
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  </>
)

export default BlogHero

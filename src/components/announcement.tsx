import React, { ReactNode } from 'react'
import * as styles from './announcement.module.css'

interface PropTypes {
  children: ReactNode
}

const Announcement = ({ children }: PropTypes) => (
  <div className={styles.announcement}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1  col-md-10 col-md-offset-1  col-lg-10 col-lg-offset-1">
          {children}
        </div>
      </div>
    </div>
  </div>
)

export default Announcement

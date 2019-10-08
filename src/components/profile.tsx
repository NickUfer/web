import React, { ReactNode } from 'react'
import Img from "gatsby-image"
import * as styles from './profile.module.css'

interface PropTypes {
  name: string
  img: any
  description: ReactNode
}

const Profile = ({ name, img, description }: PropTypes) => (
  <div className={styles.profile}>
    <div>
      <Img
        className="headshot"
        fixed={img}
        alt={name}
      />
    </div>
    <div>
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  </div>
)

export default Profile

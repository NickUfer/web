import React, { ReactNode } from 'react'
import * as styles from './profile.module.css'
import cn from 'classnames'
import aeneas from '../images/aeneas.svg'

interface PropTypes {
  name: string
  img: string
  description: ReactNode
}

const Profile = ({ name, img, description }: PropTypes) => (
  <div className={styles.profile}>
    <div>
      <img src={img} alt={name} />
    </div>
    <div>
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  </div>
)

export default Profile

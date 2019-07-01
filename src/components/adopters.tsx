import React from 'react'
import styles from './adopters.module.css'
import VerticalDivider from './vertical-divider'

import allmyfunds from '../images/adopters/allmyfunds.svg'
import arduino from '../images/adopters/arduino.svg'
import hootsuite from '../images/adopters/hootsuite.svg'
import raspi from '../images/adopters/raspi.svg'
import segment from '../images/adopters/segment.svg'
import tulip from '../images/adopters/tulip.svg'

const adopters = [
  {
    title: 'Tulip Retail',
    image: tulip,
  },
  {
    title: 'Segment',
    image: segment,
  },
  {
    title: 'All My Funds',
    image: allmyfunds,
  },
  {
    title: 'Raspberry Pi',
    image: raspi,
  },
  {
    title: 'Arduino',
    image: arduino,
  },
  {
    title: 'Hootsuite',
    image: hootsuite,
  },
]

const Adopters = () => (
  <div className={styles.adopters}>
    <div className="container-fluid">
      <div className="row">
        <VerticalDivider padding={96} />
        <div className="mobile-offset-16 col-lg-offset-1 col-lg-4  col-md-offset-1 col-md-10  col-sm-offset-1 col-sm-10">
          <h3 className="hidden-md hidden-sm">Developers love ORY</h3>
          <p>
            Developers across different industries and companies use ORY to
            provide secure access to their applications and endpoints.
          </p>
        </div>
        <div className="col-lg-offset-2 col-lg-4  col-md-offset-1 col-md-10  col-sm-offset-1 col-sm-10">
          <div className={styles.logos}>
            <div className={styles.logosInner}>
              {adopters.map(({ title, image }) => (
                <img key={title} src={image} alt={title} />
              ))}
            </div>
          </div>
        </div>
        <div className="hidden-lg  col-lg-offset-1 col-lg-4  col-md-offset-1 col-md-10  col-sm-offset-1 col-sm-10">
          <h3>Developers love ORY</h3>
        </div>
      </div>
    </div>
  </div>
)

export default Adopters

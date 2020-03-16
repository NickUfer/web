import React from 'react'
import styles from './adopters.module.css'
import VerticalDivider from './vertical-divider'

import allmyfunds from '../images/adopters/allmyfunds.svg'
import kyma from '../images/adopters/kyma.svg'
import tw from '../images/adopters/tw.svg'
import threerein from '../images/adopters/3R-horiz.svg'
import arduino from '../images/adopters/arduino.svg'
import hootsuite from '../images/adopters/hootsuite.svg'
import raspi from '../images/adopters/raspi.svg'
import segment from '../images/adopters/segment.svg'
import tulip from '../images/adopters/tulip.svg'

const adopters = [
  {
    title: 'ThoughtWorks',
    image: tw,
    url: 'https://www.thoughtworks.com',
  },
  {
    title: 'Tulip Retail',
    image: tulip,
    url: 'https://tulip.com/',
  },
  {
    title: 'Segment',
    image: segment,
    url: 'https://segment.com/',
  },
  {
    title: 'All My Funds',
    image: allmyfunds,
    url: 'https://cashdeck.com.au/',
  },
  {
    title: 'Raspberry Pi',
    image: raspi,
    url: 'https://www.raspberrypi.org/',
  },
  {
    title: 'Arduino',
    image: arduino,
    url: 'https://arduino.cc/',
  },
  {
    title: 'Hootsuite',
    image: hootsuite,
    url: 'https://hootsuite.com',
  },
  {
    title: '3REIN',
    image: threerein,
    url: 'https://3rein.com/',
  },
  {
    title: 'Kyma Project',
    image: kyma,
    url: 'https://kyma-project.io/',
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
              {adopters.map(({ title, image, url }) => (
                <a href={url} key={title}>
                  <img src={image} alt={title} />
                </a>
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

import React from 'react'
import cn from 'classnames'
import * as styles from './section.module.css'
import * as pstyles from './projects.module.css'
import hydra from '../images/ory-hydra.svg'
import keto from '../images/ory-keto.svg'
import oathkeeper from '../images/ory-oathkeeper.svg'
import { brandPrefix } from '../config'
import { Link } from 'gatsby'

const projects = [
  {
    title: `${brandPrefix}Hydra`,
    description:
      'Secure access to your applications and APIs with OAuth 2.0 and OpenID Connect.',
    image: hydra,
    path: '/hydra',
  },
  {
    title: `${brandPrefix}Oathkeeper`,
    description:
      'Verify and allow identities to interact with your applications.',
    image: oathkeeper,
    url: 'https://github.com/ory/oathkeeper',
  },
  {
    title: `${brandPrefix}Keto`,
    description: 'A best practice patterns based access control REST API.',
    image: keto,
    url: 'https://github.com/ory/keto',
  },
]

const Projects = () => (
  <div
    className={cn(
      styles.section,
      styles.dark,
      pstyles.section,
      'is-dark-background'
    )}
  >
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-offset-1 col-lg-4  col-md-offset-1 col-md-10  col-sm-offset-1 col-sm-10">
          <h3 className="hidden-sm hidden-md">Projects</h3>
          <p>
            All of our code is open source, fueled by an engaged community of
            contributors. It is licensed under Apache 2.0 and is available for
            free on GitHub. Our core projects are {brandPrefix}Hydra,{' '}
            {brandPrefix}Oathkeeper and
            {brandPrefix}Keto.
          </p>
          <p>
            You can also become a sponsor or supporter of our open source
            efforts via{' '}
            <a href="https://opencollective.com/ory">Open Collective</a> or{' '}
            <a href="https://www.patreon.com/_ory">Patreon</a>.
          </p>
        </div>
        <div className="col-lg-offset-2 col-lg-4  col-md-offset-1 col-md-10  col-sm-offset-1 col-sm-10">
          {projects.map(({ url, title, description, image, path }) =>
            path ? (
              <Link key={title} className={pstyles.project} to={path}>
                <img src={image} alt={title} />
                <div>
                  <h4>{title}</h4>
                  <p className={pstyles.description}>{description}</p>
                </div>
              </Link>
            ) : (
              <a key={title} className={pstyles.project} href={url}>
                <img src={image} alt={title} />
                <div>
                  <h4>{title}</h4>
                  <p className={pstyles.description}>{description}</p>
                </div>
              </a>
            )
          )}
        </div>
        <div className="hidden-lg col-lg-offset-1 col-lg-4  col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
          <h3>Projects</h3>
        </div>
      </div>
    </div>
  </div>
)

export default Projects

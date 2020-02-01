import React from 'react'
import cn from 'classnames'
import * as styles from './section.module.css'
import * as pstyles from './projects.module.css'
import kratos from '../images/ory_kratos.svg'
import hydra from '../images/ory_hydra.svg'
import oathkeeper from '../images/ory_oathkeeper.svg'
import keto from '../images/ory_keto.svg'
import { brandPrefix } from '../config'
import { Link } from 'gatsby'

const projects = [
  {
    className: pstyles.kratos,
    title: `${brandPrefix}Kratos`,
    description: 'Cloud native Identity and User Management',
    image: kratos,
    path: '/kratos',
  },
  {
    className: pstyles.hydra,
    title: `${brandPrefix}Hydra`,
    description:
      'Secure access to your applications and APIs with OAuth 2.0 and OpenID Connect.',
    image: hydra,
    path: '/hydra',
  },
  {
    className: pstyles.oathkeeper,
    title: `${brandPrefix}Oathkeeper`,
    description:
      'Verify and allow identities to interact with your applications.',
    image: oathkeeper,
    url: 'https://github.com/ory/oathkeeper',
  },
  {
    className: pstyles.keto,
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
          <h3 className="hidden-sm hidden-md">Open source projects</h3>
          <p>
            All of our code is open source, fueled by an engaged community of
            contributors. It is licensed under Apache 2.0 and is available for
            free on GitHub. Our core projects are {brandPrefix} Kratos,{' '}
            {brandPrefix} Hydra, {brandPrefix} Oathkeeper and {brandPrefix}{' '}
            Keto.
          </p>
          <p>
            You can also become a sponsor or supporter of our open source
            efforts via{' '}
            <a href="https://opencollective.com/ory">Open Collective</a> or{' '}
            <a href="https://www.patreon.com/_ory">Patreon</a>.
          </p>
        </div>
        <div className="col-lg-offset-2 col-lg-4  col-md-offset-1 col-md-10  col-sm-offset-1 col-sm-10">
          {projects.map(({ url, title, description, path, className, image }) =>
            path ? (
              <Link
                key={title}
                className={cn(pstyles.project, className)}
                to={path}
              >
                <div>
                  <img src={image} alt={title} />
                  <p className={pstyles.description}>{description}</p>
                </div>
              </Link>
            ) : (
              <a
                key={title}
                className={cn(pstyles.project, className)}
                href={url}
              >
                <div>
                  <img src={image} alt={title} />
                  <p className={pstyles.description}>{description}</p>
                </div>
              </a>
            )
          )}
        </div>
        <div className="hidden-lg col-lg-offset-1 col-lg-4  col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
          <h3>Open source projects</h3>
        </div>
      </div>
    </div>
  </div>
)

export default Projects

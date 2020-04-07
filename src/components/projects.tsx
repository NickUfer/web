import React from 'react'
import cn from 'classnames'
import * as styles from './section.module.css'
import * as pstyles from './projects.module.css'
import { brandPrefix } from '../config'
import { Link } from 'gatsby'

const projects = [
  {
    className: pstyles.kratos,
    title: `${brandPrefix}/ Kratos`,
    description:
      'Cloud native user management system. Provision IDs, store user information, configure authentication methods and use a headless API.',
    path: '/kratos',
  },
  {
    className: pstyles.hydra,
    title: `${brandPrefix}/ Hydra`,
    description:
      'OAuth 2.0 and OpenID Certified® OpenID Connect server. Secure access to your applications and APIs.',
    path: '/hydra',
  },
  {
    className: pstyles.oathkeeper,
    title: `${brandPrefix}/ Oathkeeper`,
    description:
      'Identity and Access Proxy (IAP). Authenticate and authorize all traffic, to interact with your applications.',
    path: '/oathkeeper',
  },
  {
    className: pstyles.keto,
    title: `${brandPrefix}/ Keto`,
    description:
      'Access Control and Permission Management Server. Use best practices (RBAC, ABAC, ACL, ...) to secure your application.',
    path: '/keto',
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
        <div
          className={
            'col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10'
          }
        >
          <div className="row">
            <h3>Open source projects</h3>
            <p className={pstyles.information}>
              All of our code is open source, fueled by an engaged community of
              contributors. It is licensed under Apache 2.0 and is available for
              free on GitHub. Our core projects are {brandPrefix} Kratos,{' '}
              {brandPrefix} Hydra, {brandPrefix} Oathkeeper and {brandPrefix}{' '}
              Keto.{' '}
              <a href="https://github.com/ory"> See all our repositories</a>
            </p>
          </div>
          <div className="row">
            <div
              className={`${pstyles.projects} col-lg-12 col-md-12 col-sm-12`}
            >
              {projects.map(({ url, title, description, path, className }) => (
                <div className="col-lg-6 col-md-12 col-sm-12" key={title}>
                  {path ? (
                    <Link className={cn(pstyles.project, className)} to={path}>
                      <div>
                        <h4 className={pstyles.description}>{title}</h4>
                        <p className={pstyles.description}>{description}</p>
                      </div>
                    </Link>
                  ) : (
                    <a className={cn(pstyles.project, className)} href={url}>
                      <div>
                        <h4 className={pstyles.description}>{title}</h4>
                        <p className={pstyles.description}>{description}</p>
                      </div>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Projects

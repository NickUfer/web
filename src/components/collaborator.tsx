import React from 'react'
import styles from './collaborator.module.css'

const collaborator = [
  {
    title: 'OpenCollective',
    image:
      'https://opencollective.com/ory/contributors.svg?avatarHeight=24&width=540&button=false',
    url: 'https://github.com/ory',
  },
]

const Collaborator = () => (
  <div className={styles.collaborator}>
    <div className="container-fluid">
      <div className="row">
        <div className="mobile-offset-16 col-lg-offset-1 col-lg-4  col-md-offset-1 col-md-10  col-sm-offset-1 col-sm-10">
          <h3 className="hidden-md hidden-sm">Open Source Contributors</h3>
          <p>
            The ORY community stands on the shoulders of individuals, companies,
            and maintainers. We thank everyone involved - from submitting bug
            reports and feature requests, to contributing patches, to sponsoring
            our work. Our small team would have never been able to achieve this
            without each and everyone of you.
          </p>
          <p>
            If you like, consider becoming a sponsor or supporter of our open
            source efforts via{' '}
            <a href="https://opencollective.com/ory">Open Collective</a> or{' '}
            <a href="https://www.patreon.com/_ory">Patreon</a>.
          </p>
        </div>
        <div className="col-lg-offset-2 col-lg-4  col-md-offset-1 col-md-10  col-sm-offset-1 col-sm-10">
          <div className={styles.image}>
            {collaborator.map(({ title, image, url }) => (
              <a href={url}>
                <img
                  key={title}
                  src={image}
                  alt={title}
                  className="responsive"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="hidden-lg  col-lg-offset-1 col-lg-4  col-md-offset-1 col-md-10  col-sm-offset-1 col-sm-10">
          <h3>Open Source Contributors</h3>
        </div>
      </div>
    </div>
  </div>
)

export default Collaborator

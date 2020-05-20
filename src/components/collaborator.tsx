import React from 'react'
import cn from 'classnames'
import styles from './collaborator.module.css'

const Contributors = () => (
  <img
    alt="OpenCollective"
    className="responsive"
    src="https://opencollective.com/ory/contributors.svg?avatarHeight=24&width=540&button=false"
  />
)

const Collaborator = () => (
  <div className={cn(styles.collaborator)}>
    <div className="container-fluid">
      <div className={cn('row middle-lg')}>
        <div className="col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
          <h3>ORY Community</h3>
          <div className={cn('hidden-lg')}>
            <Contributors />
          </div>
          <p>
            The ORY Community stands on the shoulders of individuals, companies,
            and maintainers. We thank everyone involved - from submitting bug
            reports and feature requests, to contributing patches, to sponsoring
            our work! You make this project possible!
          </p>
          <p>
            If you like, consider becoming a sponsor or supporter of our open
            source efforts via{' '}
            <a href="https://opencollective.com/ory">Open Collective</a> or{' '}
            <a href="https://www.patreon.com/_ory">Patreon</a>.
          </p>
        </div>
        <div className={cn('hidden-sm hidden-md col-lg-offset-2 col-lg-4')}>
          <Contributors />
        </div>
      </div>
    </div>
  </div>
)

export default Collaborator

// @flow
import React from 'react'
import classNames from 'classnames'

const preventFolderNavigation = (url) => (e) => {
  if (!url) {
    e.preventDefault()
  }
}

const Item = ({
  children = [],
  id,
  title = 'Without title',
  active,
  url
}) => {
  if (children.length > 0) {
    return (
      <li>
        <input type="checkbox" id={id} />
        <label htmlFor={id}>
          <a
            className={classNames({ active })}
            href={url}
            onClick={preventFolderNavigation(url)}
          >
            {title}
          </a>
        </label>
        <ul>
          {children.map((child) => (
            <Item key={child.id} {...child} />
          ))}
        </ul>
      </li>
    )
  }

  return (
    <li>
      <a className={classNames({ active })} href={url}>{title}</a>
    </li>
  )
}

export default Item

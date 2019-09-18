// @flow
import React from 'react'
import Icon from 'material-ui/svg-icons/editor/insert-emoticon'
import Component from './Component'

import './index.css'

const plugin = {
  id: 'landing-page-icon',
  content: [
    {
      Component,
      name: 'landing-page/icon',
      version: '0.0.1',
      text: 'Icon',
      IconComponent: <Icon />,
      handleRemoveHotKey: () => Promise.reject(),
      handleFocusPreviousHotKey: () => Promise.reject(),
      handleFocusNextHotKey: () => Promise.reject()
    }
  ],
  title: 'Icon'
}

export default plugin

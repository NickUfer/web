// @flow
import React from 'react'
import uuid from 'uuid'
import Icon from 'material-ui/svg-icons/image/crop-landscape'
import slateFactory from 'ory-editor-plugins-slate'
import Component from './Component'

import './styles.css'

export const defaultPlugin = slateFactory()

const section = ({ flavors }) => {
  const Wrapper = (props: any) => <Component {...props} flavors={flavors} />

  return {
    Component: Wrapper,
    name: 'landing-page/section',
    version: '0.0.1',

    text: 'Section',
    IconComponent: <Icon />,

    createInitialChildren: () => ({
      id: uuid(),
      rows: [
        {
          id: uuid(),
          cells: [
            {
              content: {
                plugin: defaultPlugin,
                state: defaultPlugin.createInitialState()
              },
              id: uuid()
            }
          ]
        }
      ]
    })
  }
}

const plugin = ({ flavors = [] }) => ({
  id: 'landing-page-section',
  layout: [section({ flavors })],
  title: 'Section'
})

export default plugin

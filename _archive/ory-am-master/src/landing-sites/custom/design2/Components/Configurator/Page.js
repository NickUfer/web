// @flow
import React from 'react'
import type { Config } from '../../type'

const Configurator = (
  { state: {}, onChange }: { onChange: any, state: Config } = {}
) => (
  <div>
    This design does not have any page settings
  </div>
)

export default Configurator

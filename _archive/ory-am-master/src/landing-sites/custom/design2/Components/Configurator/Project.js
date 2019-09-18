// @flow
import React from 'react'
import TextField from 'material-ui/TextField'
import type { Config } from '../../type'

const onInputChange = (key: string, onChange: any) => (e: Event) => {
  const target = e.target
  if (target instanceof HTMLInputElement) {
    onChange(key)(target.value)
  }
}

const Configurator = (
  {
    state: { headerTitle = '' },
    onChange
  }: { onChange: any, state: Config } = {}
) => (
  <div>
    <TextField
      floatingLabelText="Header title"
      hintText="benz"
      fullWidth
      value={headerTitle || ''}
      onChange={onInputChange('headerTitle', onChange)}
    />
  </div>
)

export default Configurator

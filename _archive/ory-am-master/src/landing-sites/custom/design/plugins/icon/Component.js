// @flow
import React from 'react'
import type {
  LayoutPluginProps
} from 'ory-editor-core/lib/service/plugin/classes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'

import { BottomToolbar } from 'ory-editor-ui'

const handleChange = (onChange: (state: any) => void, key: string) => (
  event: any,
  value: string
) => onChange({ [key]: value })

type Props = LayoutPluginProps<{}> & { children: any }

const Component = ({
  children,
  state: { icon = 'insert_emoticon', size = '24px' },
  readOnly,
  flavors = [],
  onChange,
  focused
}: Props) => (
  <div>
    <div
      className="material-icons"
      style={{ display: 'block', fontSize: size, textAlign: 'center' }}
    >
      {icon}
    </div>
    <MuiThemeProvider>
      <BottomToolbar open={focused}>
        <div>
          <TextField
            hintText="insert_emoticon"
            floatingLabelText="Material UI icon"
            inputStyle={{ color: 'white' }}
            floatingLabelStyle={{ color: 'white' }}
            hintStyle={{ color: 'grey' }}
            style={{ width: '250px' }}
            value={icon}
            onChange={handleChange(onChange, 'icon')}
          />
          <TextField
            hintText="24px"
            floatingLabelText="Icon size"
            inputStyle={{ color: 'white' }}
            floatingLabelStyle={{ color: 'white' }}
            hintStyle={{ color: 'grey' }}
            style={{ width: '250px' }}
            value={size}
            onChange={handleChange(onChange, 'size')}
          />
        </div>
      </BottomToolbar>
    </MuiThemeProvider>
  </div>
)

export default Component

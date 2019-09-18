// @flow
import React from 'react'
import type {
  LayoutPluginProps
} from 'ory-editor-core/lib/service/plugin/classes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import classNames from 'classnames'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import { BottomToolbar } from 'ory-editor-ui'

const handleChange = (onChange: (state: any) => void, key: string) => (
  event: any,
  index: any,
  value: string
) => onChange({ [key]: value })

const handleTextChange = (onChange: (state: any) => void, key: string) => (
  event: any,
  value: string
) => onChange({ [key]: value })

type Props = LayoutPluginProps<{}> & { children: any }

const Component = ({
  children,
  state: { flavor = '', anchorName = '' },
  readOnly,
  flavors = [],
  onChange,
  focused
}: Props & { flavors: Array<string> }) => (
  <div
    className={classNames(
      'ory-layout-plugin-section',
      `ory-layout-plugin-section-${flavor}`
    )}
    id={anchorName}
  >
    <div className="ory-layout-plugin-section-inner">
      {children}
      <MuiThemeProvider>
        <BottomToolbar open={focused}>
          <TextField
            hintText="my-anchor"
            floatingLabelText="Linkable anchor name"
            inputStyle={{ color: 'white' }}
            floatingLabelStyle={{ color: 'white' }}
            hintStyle={{ color: 'grey' }}
            style={{ width: '256px', display: 'block' }}
            value={anchorName}
            onChange={handleTextChange(onChange, 'anchorName')}
          />
          <SelectField
            floatingLabelText="Style"
            value={flavor}
            labelStyle={{ color: 'white' }}
            style={{ color: 'white', display: 'block' }}
            floatingLabelStyle={{ color: 'white' }}
            onChange={handleChange(onChange, 'flavor')}
          >
            {flavors.map((value: string, key: number) => (
              <MenuItem key={key} value={value} primaryText={value} />
            ))}
          </SelectField>
        </BottomToolbar>
      </MuiThemeProvider>
    </div>
  </div>
)

export default Component

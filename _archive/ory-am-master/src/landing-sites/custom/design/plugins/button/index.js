// @flow
import React from 'react'
import TextField from 'material-ui/TextField'
import { BottomToolbar } from 'ory-editor-ui'
import AutosizeInput from 'react-input-autosize'

import './index.css'

const changeText = (onChange: (state: any) => void) => (event: Event) => {
  const target = event.target

  if (target instanceof HTMLInputElement) {
    onChange({ text: target.value })
  }
}

const changeUrl = (onChange: (state: any) => void) => (
  event: Event,
  newValue: string
) => onChange({ url: newValue })

const Component = ({
  readOnly,
  onChange,
  state,
  focused
}: {
  readOnly: boolean,
  onChange: (state: any) => void,
  state: { text: string, url: string },
  focused: boolean
}) => (
  <div className="button">
    {!readOnly
      ? <div>
          <BottomToolbar open={focused}>
            <TextField
              hintText="https://ory.am/"
              floatingLabelText="Button url"
              onChange={changeUrl(onChange)}
              inputStyle={{ color: 'white' }}
              floatingLabelStyle={{ color: 'white' }}
              hintStyle={{ color: 'grey' }}
              value={state.url}
            />
          </BottomToolbar>
          <AutosizeInput
            type="text"
            inputClassName="button-text button-text-input"
            onChange={changeText(onChange)}
            value={state.text}
            placeholder="Write here"
            inputStyle={{
              font: 'inherit',
              fontSize: '100%',
              lineHeight: '1em'
            }}
          />
        </div>
      : <a
          className="button-text button-text-output"
          href={state.url}
          style={{
            textDecoration: 'none',
            lineHeight: '1em'
          }}
        >
          {state.text ? state.text : 'Write here'}
        </a>}
  </div>
)

const button = {
  Component,
  name: 'landing-page/button',
  version: '0.0.1',
  text: 'Button'
}

export default {
  id: 'landing-pagebutton',
  content: [button],
  title: 'Button'
}

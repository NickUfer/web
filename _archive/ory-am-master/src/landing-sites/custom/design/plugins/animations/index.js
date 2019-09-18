// @flow
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { BottomToolbar } from 'ory-editor-ui'

import './index.css'

const handleChange = (onChange: (state: any) => void, key: string) => (
  event: any,
  index: any,
  value: string
) => onChange({ [key]: value })

const flavors = ['editing', 'responsive', 'design']

const Component = ({
  readOnly,
  onChange,
  state: { animation },
  focused
}: {
  readOnly: boolean,
  onChange: (state: any) => void,
  state: { animation: string },
  focused: boolean
}) => (
  <div className="button">
    {!readOnly &&
    <div>
      <MuiThemeProvider>
        <BottomToolbar open={focused}>
          <SelectField
            floatingLabelText="Style"
            value={animation}
            labelStyle={{ color: 'white' }}
            style={{ color: 'white', display: 'block' }}
            floatingLabelStyle={{ color: 'white' }}
            onChange={handleChange(onChange, 'animation')}
          >
            {flavors.map((value: string, key: number) => (
              <MenuItem key={key} value={value} primaryText={value} />
            ))}
          </SelectField>
        </BottomToolbar>
      </MuiThemeProvider>
    </div>}
    {(() => {
      switch (animation) {
        case 'editing':
          return (
            <div className="animation-editing">
              <div className="box-main">
                <div className="bar" />
                <div className="top-square1" />
                <div className="top-square2" />
                <div className="top-square3" />
                <div className="top-square4" />
                <div className="banner" />
                <div className="mid-text1" />
                <div className="mid-text2" />
                <div className="mid-text3" />
                <div className="mid-content1" />
                <div className="mid-content2" />
                <div className="bot-content1" />
                <div className="bot-content2" />
                <div className="bot-content3" />
                <div className="bot-content4" />
                <div className="bot-content5" />
                <div className="bottom" />
              </div>
            </div>
          )
        case 'responsive':
          return (
            <div className="animation-responsive">
              <div className="box-main">
                <div className="bar" />
                <div className="top-square1" />
                <div className="top-square2" />
                <div className="top-square3" />
                <div className="top-square4" />
                <div className="banner" />
                <div className="mid-text1" />
                <div className="mid-text2" />
                <div className="mid-text3" />
                <div className="mid-content1" />
                <div className="mid-content2" />
                <div className="bot-content1" />
                <div className="bot-content2" />
                <div className="bot-content3" />
                <div className="bot-content4" />
                <div className="bot-content5" />
                <div className="bottom" />
              </div>
            </div>
          )
        case 'design':
        default:
          return (
            <div className="animation-design">
              <div className="box-main">
                <div className="bar" />
                <div className="banner">
                  <div className="banner-pattern" />
                  <div className="banner-pattern2" />
                </div>
                <div className="mid-text1" />
                <div className="mid-text2" />
                <div className="mid-text3" />
                <div className="mid-content1" />
                <div className="mid-content2" />
                <div className="mid-content3" />
                <div className="mid-content4" />
                <div className="bot-text1" />
                <div className="bot-text2" />
                <div className="bot-text3" />
                <div className="bot-content1" />
                <div className="bot-content2" />
                <div className="bottom" />
              </div>
            </div>
          )
      }
    })()}
  </div>
)

const animation = {
  Component,
  name: 'landing-page/animation',
  version: '0.0.1',
  text: 'Animation'
}

export default {
  id: 'landing-page-animation',
  content: [animation],
  title: 'Animation'
}

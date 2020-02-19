import React, { Component } from 'react'
import Prism from 'prismjs'
import cn from 'classnames'

import * as styles from './codebox.module.css'

interface Tab {
  filename: string
  code: string
  language: string
}

interface PropTypes {
  tabs: Tab[]
}

interface StateTypes {
  active: number
}

class CodeBox extends Component<PropTypes, StateTypes> {
  state = {
    active: 0,
  }

  componentDidMount() {
    Prism.highlightAll()
  }

  onSelectTab = (index: number) => () => {
    this.setState({ active: index })
  }

  render() {
    const { tabs } = this.props
    return (
      <div className={styles.box}>
        <div className={styles.editorHeader}>
          <div className={styles.windowActions}>
            <div className={cn(styles.windowAction, styles.primary)} />
            <div className={cn(styles.windowAction)} />
            <div className={cn(styles.windowAction)} />
          </div>
          <div className={styles.tabs}>
            {tabs.map(({ filename }, index) => (
              <div
                key={filename}
                className={cn(styles.tab, {
                  [styles.selected]: index === this.state.active,
                })}
                onClick={this.onSelectTab(index)}
              >
                {filename}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.content}>
          {tabs.map(({ filename, code, language }, index) => (
            <pre
              key={filename}
              className={cn(`language-${language}`, {
                [styles.active]: index === this.state.active,
              })}
            >
              <code dangerouslySetInnerHTML={{ __html: `${code}` }} />
            </pre>
          ))}
        </div>
      </div>
    )
  }
}

export default CodeBox

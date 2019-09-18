// @flow
import './index.css'

import Template from './Components/Template'

import section from './plugins/section'
import button from './plugins/button'
import icon from './plugins/icon'
import animations from './plugins/animations'

const menus = ['main', 'footer', 'action']

const plugins = [
  section({ flavors: ['hero', 'regular', 'muted', 'features', 'pricing', 'pricing-muted', 'pricing-hero'] }),
  icon,
  button,
  animations
]

const design = {
  Template,
  id: 'ory-design-benz',
  title: 'benz',
  menus,
  plugins
}

export default design

// @flow
import Template from './Components/Template'
import Page from './Components/Configurator/Page'
import Project from './Components/Configurator/Project'
import type { Design } from '../../../shared/services/project/types'
import { all } from '../../../shared/plans'
import { plugins as corePlugins } from '../../plugins/core'
import section from '../../plugins/section'
import icon from '../../plugins/icon'
import button from '../../plugins/button'
import spoiler from '../../plugins/spoiler'

const Configurator = {
  Page,
  Project
}

const menus = ['main', 'footer', 'action']

const plugins = [
  ...corePlugins,
  section({ flavors: ['hero', 'regular', 'muted', 'features', 'pricing', 'pricing-muted', 'pricing-hero'] }),
  icon,
  button,
  spoiler
]

const design: Design = {
  Template,
  Configurator,
  id: 'ory-design-benz',
  title: 'benz',
  stylesheets: ['add-ons/designs/benz/index.css'],
  image: './assets/images/plugins/vipin.png',
  description: 'A beautiful theme suitable for business and personal pages.',
  type: 'theme',
  availableInPlans: [...all()],
  menus,
  plugins
}

export default design

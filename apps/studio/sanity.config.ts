import {defineConfig} from 'sanity'
import {
  dashboardTool,
  projectInfoWidget,
  projectUsersWidget,
  sanityTutorialsWidget,
} from '@sanity/dashboard'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {codeInput} from '@sanity/code-input'

const DATASET = 'production'

export default defineConfig({
  title: `Lekanger.no [dataset: ${DATASET}]`,
  projectId: 'ajget05d',
  dataset: DATASET,

  plugins: [
    deskTool(),
    codeInput(),
    dashboardTool({
      widgets: [sanityTutorialsWidget(), projectInfoWidget(), projectUsersWidget()],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})

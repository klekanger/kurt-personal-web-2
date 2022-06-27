import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {codeInput} from '@sanity/code-input'

export default createConfig({
  name: 'default',
  title: 'Kurts portfolio',

  projectId: 'ajget05d',
  dataset: 'development',

  plugins: [deskTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})

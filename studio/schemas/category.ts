import {MdCategory} from 'react-icons/md'

export default {
  name: 'category',
  type: 'document',
  title: 'Artikler - kategorier',
  icon: MdCategory,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tittel',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Beskrivelse',
    },
  ],
}

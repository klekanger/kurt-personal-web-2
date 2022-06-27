import { MdCategory } from 'react-icons/md';

export default {
  name: 'webContentCategory',
  type: 'document',
  title: 'Undersider - kategorier',
  icon: MdCategory,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Kategori'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Beskrivelse'
    }
  ]
};

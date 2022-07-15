import {MdPerson} from 'react-icons/md'

export default {
  name: 'author',
  title: 'Forfattere',
  type: 'document',
  icon: MdPerson,
  fields: [
    {
      name: 'name',
      title: 'Navn',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Bilde',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}

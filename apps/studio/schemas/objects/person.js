import { MdPerson } from 'react-icons/md';

export default {
  name: 'person',
  type: 'document',
  title: 'Person',
  icon: MdPerson,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Navn'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Legg inn en «slug».',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Bilde',
      type: 'figure'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'bioPortableText'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
};

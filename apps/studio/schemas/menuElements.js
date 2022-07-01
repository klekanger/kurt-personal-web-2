import {MdList} from 'react-icons/md'

export default {
  name: 'menuElement',
  title: 'Menyelementer',
  type: 'document',
  icon: MdList,
  fields: [
    {
      name: 'title',
      title: 'Menytittel',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Rekkefølge i menyen (1, 2, 3, ...)',
      type: 'number',
    },

    {
      name: 'urlField',
      title: 'URL menyelementet skal lenke til. Starter typisk med / (eksempel: /about-me )',
      type: 'string',
      validation: (Rule) => Rule.required().error('Må fylles ut'),
    },
  ],
  preview: {
    select: {
      title: 'title',
      order: 'order',
    },

    prepare({title = 'Ingen tittel', order = 0}) {
      return {
        title: `[${order.toString()}] ${title}`,
      }
    },
  },
}

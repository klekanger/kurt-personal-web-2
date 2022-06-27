import {format, parseISO} from 'date-fns'
import {MdArticle} from 'react-icons/md'

export default {
  name: 'webContent',
  title: 'Undersider på nettsiden',
  type: 'document',
  icon: MdArticle,
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Hovedbilde',
      type: 'figure',
    },
    {
      name: 'publishedAt',
      title: 'Publiseringstidspunkt',
      description: 'Du kan bruke dette feltet til å forhåndspublisere artikler.',
      type: 'datetime',
    },

    {
      name: 'body',
      title: 'Brødtekst',
      type: 'projectPortableText',
    },
    {
      name: 'webContentTextBoxes',
      title: 'Tekstbokser til web-innhold',
      type: 'array',
      of: [{type: 'reference', to: {type: 'webContentTextBox'}}],
    },
    {
      name: 'webContentType',
      title: 'Type web-innhold',
      type: 'string',
      options: {
        list: [
          {title: 'Tjeneste', value: 'service'},
          {title: 'Kundereferanse', value: 'customer-reference'},
          {title: 'Om meg', value: 'about-me'},
          {title: 'Kontakt meg', value: 'contact-me'},
          {title: 'Personvern-side', value: 'privacy'},
          {title: 'Annet', value: 'other'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Emneknagger',
      description: 'Emneknagger som beskriver artikkelen',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      media: 'mainImage',
      category: 'webContentCategories.0.title',
    },
    prepare({title = 'Ingen tittel', publishedAt, media, category = ' - '}) {
      const dateSegment = publishedAt ? format(parseISO(publishedAt), 'yyyy/MM') : null
      const published = `Publisert: ${dateSegment} [${category}]`

      return {
        title,
        media,
        subtitle: publishedAt ? published : `Manglende publiseringsdato [${category}]`,
      }
    },
  },
}

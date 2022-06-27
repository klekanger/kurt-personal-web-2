import {format, parseISO} from 'date-fns'
import {MdArticle} from 'react-icons/md'

export default {
  name: 'project',
  title: 'Artikler',
  type: 'document',
  icon: MdArticle,
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Legg til en «slug» for prosjektet.',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Publiseringstidspunkt',
      description: 'Du kan bruke dette feltet til å forhåndspublisere artikler.',
      type: 'datetime',
    },
    {
      name: 'pinned',
      title: 'Pinned',
      type: 'boolean',
    },
    {
      name: 'excerpt',
      title: 'Kort oppsummering',
      type: 'simplePortableText',
    },
    {
      name: 'author',
      title: 'Forfatter',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'members',
      title: 'Forfatter (ikke lenger i bruk)',
      type: 'array',
      of: [{type: 'projectMember'}],
    },
    {
      name: 'mainImage',
      title: 'Hovedbilde',
      type: 'figure',
    },
    {
      name: 'categories',
      title: 'Kategorier',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'body',
      title: 'Brødtekst',
      type: 'projectPortableText',
    },
    {
      name: 'relatedProjects',
      title: 'Relaterte artikler',
      type: 'array',
      of: [{type: 'reference', to: {type: 'project'}}],
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
      slug: 'slug',
      media: 'mainImage',
    },
    prepare({title = 'Ingen tittel', publishedAt, slug = {}, media}) {
      const dateSegment = publishedAt ? format(parseISO(publishedAt), 'yyyy/MM') : null

      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Manglende publiseringsdato',
      }
    },
  },
}

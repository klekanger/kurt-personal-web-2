export default {
  name: 'figure',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      title: 'Bildetekst',
      name: 'caption',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternativ tekst',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      description: 'Viktig for SEO and tilgjengelighet.',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Innstillinger',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tittel'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Beskrivelse',
      description: 'Beskriv nettsiden for søkemotorer og sosiale medier.'
    },
    {
      name: 'intro',
      title: 'Introtekst',
      type: 'projectPortableText'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Nøkkelord',
      description: 'Nøkkelord som beskriver nettsiden.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publiser en forfatter og legg inn en referanse til forfatteren her.',
      title: 'Forfatter',
      to: [{ type: 'person' }]
    }
  ]
};

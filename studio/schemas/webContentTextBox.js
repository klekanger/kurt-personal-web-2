import { MdViewModule } from 'react-icons/md';

export default {
  name: 'webContentTextBox',
  type: 'document',
  title: 'Undersider - tekstbokser til artiklene',
  icon: MdViewModule,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tittel',
      validation: Rule =>
        Rule.required()
          .min(3)
          .max(200)
    },
    {
      name: 'content',
      type: 'text',
      title: 'Kort tekst til innhold',
      validation: Rule =>
        Rule.required()
          .min(3)
          .max(500)
    }
  ]
};

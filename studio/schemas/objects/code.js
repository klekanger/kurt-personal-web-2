export default {
  name: 'content',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
    },
    {
      type: 'image',
    },
    {
      type: 'code',
    },
  ],
}

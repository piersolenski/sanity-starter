export default {
  title: 'richText',
  name: 'Rich Text',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Italic', value: 'italic' },
          { title: 'Code', value: 'code' },
        ],
      },
    },
  ],
};

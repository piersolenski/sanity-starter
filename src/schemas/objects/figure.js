import { FaImage as Icon } from 'react-icons/fa';

export default {
  name: 'figure',
  title: 'Image',
  type: 'image',
  icon: Icon,
  fields: [
    {
      name: 'alt',
      title: 'Alternative text (for screen readers)',
      type: 'string',
      options: {
        isHighlighted: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      subtitle: 'alt',
      media: 'asset',
    },
  },
};

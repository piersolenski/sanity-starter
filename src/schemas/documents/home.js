import { FaHome as Icon } from 'react-icons/fa';

export default {
  type: 'document',
  name: 'home',
  title: 'Home',
  icon: Icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
  ],
};

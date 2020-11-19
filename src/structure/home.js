import S from '@sanity/desk-tool/structure-builder';
import { FaHome as Icon } from 'react-icons/fa';

export default S.listItem()
  .title('Home')
  .icon(Icon)
  .child(
    S.editor().title('Home').id('home').schemaType('home').documentId('home')
  );

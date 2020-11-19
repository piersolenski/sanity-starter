import S from '@sanity/desk-tool/structure-builder';
import importAll from './utils/importAll';
import * as structure from './structure';

export default () => S.list().title('Content').items(importAll(structure));

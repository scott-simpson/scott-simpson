import system from '@rebass/components';

export const List = system({
  m: 0,
  p: 0,
  is: 'ul',
},
  'space',
  'color',
  'fontSize',
  'fontWeight',
  'textAlign',
  'lineHeight'
);

List.displayName = 'List';

export default List;

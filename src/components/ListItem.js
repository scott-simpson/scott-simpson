import system from '@rebass/components';

export const ListItem = system({
  m: 0,
  p: 0,
  is: 'li',
}, props => ({
  listStylePosition: 'outside'
}),
  'space',
  'color',
  'fontSize',
  'fontWeight',
  'textAlign',
  'lineHeight',
);

ListItem.displayName = 'ListItem';

export default ListItem;

import React, {PropTypes} from 'react';
import sys from 'system-components';

export const ListItem = sys({
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

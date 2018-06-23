import React, {PropTypes} from 'react';
import sys from 'system-components';

export const List = sys({
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

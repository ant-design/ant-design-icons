
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BookOutlineSvg from '@ant-design/icons-svg/lib/outline/BookOutline';

export default {
  name: 'IconBook',
  displayName: 'Book',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BookOutlineSvg } },
      children
    ),
};

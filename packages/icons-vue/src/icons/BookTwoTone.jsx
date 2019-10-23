
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BookTwoToneSvg from '@ant-design/icons-svg/lib/twotone/BookTwoTone';

export default {
  name: 'IconBookTwoTone',
  displayName: 'BookTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BookTwoToneSvg } },
      children
    ),
};

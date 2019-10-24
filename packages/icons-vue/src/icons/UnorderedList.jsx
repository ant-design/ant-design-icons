
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UnorderedListOutlineSvg from '@ant-design/icons-svg/lib/outline/UnorderedListOutline';

export default {
  name: 'IconUnorderedList',
  displayName: 'UnorderedList',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UnorderedListOutlineSvg } },
      children
    ),
};

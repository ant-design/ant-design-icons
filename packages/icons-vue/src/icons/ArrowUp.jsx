
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ArrowUpOutlineSvg from '@ant-design/icons-svg/lib/outline/ArrowUpOutline';

export default {
  name: 'ArrowUp',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ArrowUpOutlineSvg } },
      children
    ),
};

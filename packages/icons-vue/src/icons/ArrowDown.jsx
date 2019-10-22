
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ArrowDownOutlineSvg from '@ant-design/icons-svg/lib/outline/ArrowDownOutline';

export default {
  name: 'ArrowDown',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ArrowDownOutlineSvg } },
      children
    ),
};

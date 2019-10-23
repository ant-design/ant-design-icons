
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DollarOutlineSvg from '@ant-design/icons-svg/lib/outline/DollarOutline';

export default {
  name: 'IconDollar',
  displayName: 'Dollar',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DollarOutlineSvg } },
      children
    ),
};

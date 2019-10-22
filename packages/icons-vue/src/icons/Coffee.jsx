
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CoffeeOutlineSvg from '@ant-design/icons-svg/lib/outline/CoffeeOutline';

export default {
  name: 'Coffee',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CoffeeOutlineSvg } },
      children
    ),
};

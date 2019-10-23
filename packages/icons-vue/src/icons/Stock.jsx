
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import StockOutlineSvg from '@ant-design/icons-svg/lib/outline/StockOutline';

export default {
  name: 'IconStock',
  displayName: 'Stock',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StockOutlineSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TrademarkOutlineSvg from '@ant-design/icons-svg/lib/outline/TrademarkOutline';

export default {
  name: 'IconTrademark',
  displayName: 'Trademark',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TrademarkOutlineSvg } },
      children
    ),
};

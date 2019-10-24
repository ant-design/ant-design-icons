
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TrademarkCircleTwoToneSvg from '@ant-design/icons-svg/lib/twotone/TrademarkCircleTwoTone';

export default {
  name: 'IconTrademarkCircleTwoTone',
  displayName: 'TrademarkCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TrademarkCircleTwoToneSvg } },
      children
    ),
};

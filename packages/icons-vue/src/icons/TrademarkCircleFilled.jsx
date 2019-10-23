
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TrademarkCircleFillSvg from '@ant-design/icons-svg/lib/fill/TrademarkCircleFill';

export default {
  name: 'IconTrademarkCircleFilled',
  displayName: 'TrademarkCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TrademarkCircleFillSvg } },
      children
    ),
};

// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TrademarkCircleFilledSvg from '@ant-design/icons-svg/lib/asn/TrademarkCircleFilled';

export default {
  name: 'IconTrademarkCircleFilled',
  displayName: 'TrademarkCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TrademarkCircleFilledSvg } },
      children,
    ),
};
// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MoneyCollectFilledSvg from '@ant-design/icons-svg/lib/asn/MoneyCollectFilled';

export default {
  name: 'IconMoneyCollectFilled',
  displayName: 'MoneyCollectFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MoneyCollectFilledSvg } },
      children,
    ),
};
// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MoneyCollectTwoToneSvg from '@ant-design/icons-svg/lib/asn/MoneyCollectTwoTone';

export default {
  name: 'IconMoneyCollectTwoTone',
  displayName: 'MoneyCollectTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MoneyCollectTwoToneSvg } },
      children,
    ),
};
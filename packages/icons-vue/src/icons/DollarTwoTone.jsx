// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DollarTwoToneSvg from '@ant-design/icons-svg/lib/asn/DollarTwoTone';

export default {
  name: 'IconDollarTwoTone',
  displayName: 'DollarTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DollarTwoToneSvg } },
      children,
    ),
};
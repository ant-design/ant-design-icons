// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CalculatorTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalculatorTwoTone';

export default {
  name: 'IconCalculatorTwoTone',
  displayName: 'CalculatorTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CalculatorTwoToneSvg } },
      children,
    ),
};
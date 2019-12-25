// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CalculatorFilledSvg from '@ant-design/icons-svg/lib/asn/CalculatorFilled';

export default {
  name: 'IconCalculatorFilled',
  displayName: 'CalculatorFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CalculatorFilledSvg } },
      children,
    ),
};

// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CalculatorFillSvg from '@ant-design/icons-svg/lib/fill/CalculatorFill';

export default {
  name: 'IconCalculatorFilled',
  displayName: 'CalculatorFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CalculatorFillSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CalculatorOutlineSvg from '@ant-design/icons-svg/lib/outline/CalculatorOutline';

export default {
  name: 'IconCalculator',
  displayName: 'Calculator',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CalculatorOutlineSvg } },
      children
    ),
};

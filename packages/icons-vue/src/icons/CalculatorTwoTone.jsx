
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CalculatorTwoToneSvg from '@ant-design/icons-svg/lib/twotone/CalculatorTwoTone';

export default {
  name: 'CalculatorTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CalculatorTwoToneSvg } },
      children
    ),
};

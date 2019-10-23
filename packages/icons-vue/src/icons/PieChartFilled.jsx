
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PieChartFillSvg from '@ant-design/icons-svg/lib/fill/PieChartFill';

export default {
  name: 'IconPieChartFilled',
  displayName: 'PieChartFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PieChartFillSvg } },
      children
    ),
};

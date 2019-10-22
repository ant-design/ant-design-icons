
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PieChartOutlineSvg from '@ant-design/icons-svg/lib/outline/PieChartOutline';

export default {
  name: 'PieChart',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PieChartOutlineSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LineChartOutlineSvg from '@ant-design/icons-svg/lib/outline/LineChartOutline';

export default {
  name: 'IconLineChart',
  displayName: 'LineChart',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LineChartOutlineSvg } },
      children
    ),
};

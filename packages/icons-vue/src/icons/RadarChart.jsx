
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RadarChartOutlineSvg from '@ant-design/icons-svg/lib/outline/RadarChartOutline';

export default {
  name: 'RadarChart',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RadarChartOutlineSvg } },
      children
    ),
};

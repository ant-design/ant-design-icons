
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BarChartOutlineSvg from '@ant-design/icons-svg/lib/outline/BarChartOutline';

export default {
  name: 'IconBarChart',
  displayName: 'BarChart',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BarChartOutlineSvg } },
      children
    ),
};

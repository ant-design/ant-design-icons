
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HeatMapOutlineSvg from '@ant-design/icons-svg/lib/outline/HeatMapOutline';

export default {
  name: 'IconHeatMap',
  displayName: 'HeatMap',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HeatMapOutlineSvg } },
      children
    ),
};

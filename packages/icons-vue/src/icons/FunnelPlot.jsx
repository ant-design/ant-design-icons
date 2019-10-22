
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FunnelPlotOutlineSvg from '@ant-design/icons-svg/lib/outline/FunnelPlotOutline';

export default {
  name: 'FunnelPlot',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FunnelPlotOutlineSvg } },
      children
    ),
};

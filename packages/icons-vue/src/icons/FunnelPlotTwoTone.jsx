
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FunnelPlotTwoToneSvg from '@ant-design/icons-svg/lib/twotone/FunnelPlotTwoTone';

export default {
  name: 'IconFunnelPlotTwoTone',
  displayName: 'FunnelPlotTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FunnelPlotTwoToneSvg } },
      children
    ),
};

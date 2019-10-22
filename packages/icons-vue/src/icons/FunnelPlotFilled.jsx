
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FunnelPlotFillSvg from '@ant-design/icons-svg/lib/fill/FunnelPlotFill';

export default {
  name: 'FunnelPlotFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FunnelPlotFillSvg } },
      children
    ),
};

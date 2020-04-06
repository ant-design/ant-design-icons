// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FunnelPlotFilledSvg from '@ant-design/icons-svg/lib/asn/FunnelPlotFilled';

export default {
  name: 'IconFunnelPlotFilled',
  displayName: 'FunnelPlotFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FunnelPlotFilledSvg } },
      children,
    ),
};
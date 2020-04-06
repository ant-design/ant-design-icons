// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LineChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/LineChartOutlined';

export default {
  name: 'IconLineChartOutlined',
  displayName: 'LineChartOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LineChartOutlinedSvg } },
      children,
    ),
};
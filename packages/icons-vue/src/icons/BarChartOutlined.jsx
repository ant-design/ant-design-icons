// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BarChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/BarChartOutlined';

export default {
  name: 'IconBarChartOutlined',
  displayName: 'BarChartOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BarChartOutlinedSvg } },
      children,
    ),
};
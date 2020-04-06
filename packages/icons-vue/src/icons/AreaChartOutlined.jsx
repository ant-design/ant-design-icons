// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AreaChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/AreaChartOutlined';

export default {
  name: 'IconAreaChartOutlined',
  displayName: 'AreaChartOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AreaChartOutlinedSvg } },
      children,
    ),
};
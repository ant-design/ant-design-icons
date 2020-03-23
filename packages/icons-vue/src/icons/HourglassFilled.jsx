// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HourglassFilledSvg from '@ant-design/icons-svg/lib/asn/HourglassFilled';

export default {
  name: 'IconHourglassFilled',
  displayName: 'HourglassFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: HourglassFilledSvg } },
      children,
    ),
};
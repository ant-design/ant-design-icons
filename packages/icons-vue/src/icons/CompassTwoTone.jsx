// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CompassTwoToneSvg from '@ant-design/icons-svg/lib/asn/CompassTwoTone';

export default {
  name: 'IconCompassTwoTone',
  displayName: 'CompassTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CompassTwoToneSvg } },
      children,
    ),
};
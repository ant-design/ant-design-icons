// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CompassFilledSvg from '@ant-design/icons-svg/lib/asn/CompassFilled';

export default {
  name: 'IconCompassFilled',
  displayName: 'CompassFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CompassFilledSvg } },
      children,
    ),
};
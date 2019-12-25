// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import StopFilledSvg from '@ant-design/icons-svg/lib/asn/StopFilled';

export default {
  name: 'IconStopFilled',
  displayName: 'StopFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: StopFilledSvg } },
      children,
    ),
};
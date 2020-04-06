// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ControlFilledSvg from '@ant-design/icons-svg/lib/asn/ControlFilled';

export default {
  name: 'IconControlFilled',
  displayName: 'ControlFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ControlFilledSvg } },
      children,
    ),
};
// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FastForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/FastForwardOutlined';

export default {
  name: 'IconFastForwardOutlined',
  displayName: 'FastForwardOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FastForwardOutlinedSvg } },
      children,
    ),
};
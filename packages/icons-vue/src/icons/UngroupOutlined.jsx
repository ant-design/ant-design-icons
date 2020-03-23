// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UngroupOutlinedSvg from '@ant-design/icons-svg/lib/asn/UngroupOutlined';

export default {
  name: 'IconUngroupOutlined',
  displayName: 'UngroupOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UngroupOutlinedSvg } },
      children,
    ),
};
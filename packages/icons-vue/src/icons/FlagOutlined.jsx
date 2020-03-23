// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FlagOutlinedSvg from '@ant-design/icons-svg/lib/asn/FlagOutlined';

export default {
  name: 'IconFlagOutlined',
  displayName: 'FlagOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FlagOutlinedSvg } },
      children,
    ),
};
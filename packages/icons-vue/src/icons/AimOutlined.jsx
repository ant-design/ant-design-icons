// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AimOutlinedSvg from '@ant-design/icons-svg/lib/asn/AimOutlined';

export default {
  name: 'IconAimOutlined',
  displayName: 'AimOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AimOutlinedSvg } },
      children,
    ),
};
// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ShakeOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShakeOutlined';

export default {
  name: 'IconShakeOutlined',
  displayName: 'ShakeOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ShakeOutlinedSvg } },
      children,
    ),
};
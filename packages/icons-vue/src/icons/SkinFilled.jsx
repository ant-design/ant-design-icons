// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SkinFilledSvg from '@ant-design/icons-svg/lib/asn/SkinFilled';

export default {
  name: 'IconSkinFilled',
  displayName: 'SkinFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SkinFilledSvg } },
      children,
    ),
};
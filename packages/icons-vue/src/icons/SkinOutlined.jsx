// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SkinOutlinedSvg from '@ant-design/icons-svg/lib/asn/SkinOutlined';

export default {
  name: 'IconSkinOutlined',
  displayName: 'SkinOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SkinOutlinedSvg } },
      children,
    ),
};
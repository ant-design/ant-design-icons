
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SkinOutlineSvg from '@ant-design/icons-svg/lib/outline/SkinOutline';

export default {
  name: 'IconSkin',
  displayName: 'Skin',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SkinOutlineSvg } },
      children
    ),
};

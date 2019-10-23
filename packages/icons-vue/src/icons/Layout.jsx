
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LayoutOutlineSvg from '@ant-design/icons-svg/lib/outline/LayoutOutline';

export default {
  name: 'IconLayout',
  displayName: 'Layout',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LayoutOutlineSvg } },
      children
    ),
};

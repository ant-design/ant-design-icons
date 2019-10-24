
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FontSizeOutlineSvg from '@ant-design/icons-svg/lib/outline/FontSizeOutline';

export default {
  name: 'IconFontSize',
  displayName: 'FontSize',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FontSizeOutlineSvg } },
      children
    ),
};

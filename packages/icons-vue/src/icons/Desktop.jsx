
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DesktopOutlineSvg from '@ant-design/icons-svg/lib/outline/DesktopOutline';

export default {
  name: 'Desktop',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DesktopOutlineSvg } },
      children
    ),
};

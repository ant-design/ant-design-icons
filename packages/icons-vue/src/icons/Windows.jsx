
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WindowsOutlineSvg from '@ant-design/icons-svg/lib/outline/WindowsOutline';

export default {
  name: 'IconWindows',
  displayName: 'Windows',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WindowsOutlineSvg } },
      children
    ),
};

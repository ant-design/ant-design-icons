
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ChromeOutlineSvg from '@ant-design/icons-svg/lib/outline/ChromeOutline';

export default {
  name: 'IconChrome',
  displayName: 'Chrome',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ChromeOutlineSvg } },
      children
    ),
};

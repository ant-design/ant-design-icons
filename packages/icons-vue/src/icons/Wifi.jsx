
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WifiOutlineSvg from '@ant-design/icons-svg/lib/outline/WifiOutline';

export default {
  name: 'Wifi',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WifiOutlineSvg } },
      children
    ),
};

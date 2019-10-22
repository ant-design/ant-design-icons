
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AppleOutlineSvg from '@ant-design/icons-svg/lib/outline/AppleOutline';

export default {
  name: 'Apple',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AppleOutlineSvg } },
      children
    ),
};

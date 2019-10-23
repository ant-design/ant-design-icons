
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MobileOutlineSvg from '@ant-design/icons-svg/lib/outline/MobileOutline';

export default {
  name: 'IconMobile',
  displayName: 'Mobile',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MobileOutlineSvg } },
      children
    ),
};

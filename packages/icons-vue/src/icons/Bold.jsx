
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BoldOutlineSvg from '@ant-design/icons-svg/lib/outline/BoldOutline';

export default {
  name: 'IconBold',
  displayName: 'Bold',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BoldOutlineSvg } },
      children
    ),
};

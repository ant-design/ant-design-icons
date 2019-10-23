
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ShrinkOutlineSvg from '@ant-design/icons-svg/lib/outline/ShrinkOutline';

export default {
  name: 'IconShrink',
  displayName: 'Shrink',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ShrinkOutlineSvg } },
      children
    ),
};

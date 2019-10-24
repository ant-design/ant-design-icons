
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ForkOutlineSvg from '@ant-design/icons-svg/lib/outline/ForkOutline';

export default {
  name: 'IconFork',
  displayName: 'Fork',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ForkOutlineSvg } },
      children
    ),
};

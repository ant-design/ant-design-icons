
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import StarOutlineSvg from '@ant-design/icons-svg/lib/outline/StarOutline';

export default {
  name: 'IconStar',
  displayName: 'Star',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StarOutlineSvg } },
      children
    ),
};

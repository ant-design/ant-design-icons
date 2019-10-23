
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LikeOutlineSvg from '@ant-design/icons-svg/lib/outline/LikeOutline';

export default {
  name: 'IconLike',
  displayName: 'Like',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LikeOutlineSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DislikeOutlineSvg from '@ant-design/icons-svg/lib/outline/DislikeOutline';

export default {
  name: 'Dislike',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DislikeOutlineSvg } },
      children
    ),
};

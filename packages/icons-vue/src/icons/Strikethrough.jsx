
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import StrikethroughOutlineSvg from '@ant-design/icons-svg/lib/outline/StrikethroughOutline';

export default {
  name: 'IconStrikethrough',
  displayName: 'Strikethrough',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StrikethroughOutlineSvg } },
      children
    ),
};

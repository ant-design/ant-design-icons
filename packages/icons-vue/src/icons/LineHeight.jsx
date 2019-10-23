
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LineHeightOutlineSvg from '@ant-design/icons-svg/lib/outline/LineHeightOutline';

export default {
  name: 'IconLineHeight',
  displayName: 'LineHeight',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LineHeightOutlineSvg } },
      children
    ),
};

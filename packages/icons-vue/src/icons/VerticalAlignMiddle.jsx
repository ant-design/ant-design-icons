
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import VerticalAlignMiddleOutlineSvg from '@ant-design/icons-svg/lib/outline/VerticalAlignMiddleOutline';

export default {
  name: 'IconVerticalAlignMiddle',
  displayName: 'VerticalAlignMiddle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: VerticalAlignMiddleOutlineSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ToolOutlineSvg from '@ant-design/icons-svg/lib/outline/ToolOutline';

export default {
  name: 'Tool',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ToolOutlineSvg } },
      children
    ),
};

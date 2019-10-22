
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ToolTwoToneSvg from '@ant-design/icons-svg/lib/twotone/ToolTwoTone';

export default {
  name: 'ToolTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ToolTwoToneSvg } },
      children
    ),
};

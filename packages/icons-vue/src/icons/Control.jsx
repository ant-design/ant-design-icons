
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ControlOutlineSvg from '@ant-design/icons-svg/lib/outline/ControlOutline';

export default {
  name: 'IconControl',
  displayName: 'Control',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ControlOutlineSvg } },
      children
    ),
};


// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SwitcherOutlineSvg from '@ant-design/icons-svg/lib/outline/SwitcherOutline';

export default {
  name: 'Switcher',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SwitcherOutlineSvg } },
      children
    ),
};

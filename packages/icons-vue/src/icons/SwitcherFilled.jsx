
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SwitcherFillSvg from '@ant-design/icons-svg/lib/fill/SwitcherFill';

export default {
  name: 'IconSwitcherFilled',
  displayName: 'SwitcherFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SwitcherFillSvg } },
      children
    ),
};
